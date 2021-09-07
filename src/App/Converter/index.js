import { useState, useEffect } from "react";
import Controls from "./Controls";
import Loading from "./Loading";
import NumCode from "../NumCode";
import axios from "axios";
import { ConverterElement, ConverterButton } from "./styled";

const Converter = ({ savedList, setSavedList, changeInfo }) => {

    const [converterData, setConverterData] = useState({
        source: "EUR",
        target: "PLN",
        sourceValue: 21.37,
        targetValue: 21.37,
    });
    const [rate, setRate] = useState(21.37);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const createList = (list) => {
        return Object.entries(list).map(item => {
            return { code: item[0], rate: item[1] }
        });
    }

    const getRates = (currency) => {
        setLoading(true);
        changeInfo("Obtaining rates for " + currency, false);

        axios.get("https://api.exchangerate.host/latest?base=" + currency)
            .then(currencyList => {
                changeInfo("I am ready to use!", false);
                setList(createList(currencyList.data.rates));
                setLoading(false);
            })
            .catch(error => {
                changeInfo("Can't obtain rates for " + currency + ". Check console for more information.", true);
                console.error(error);
                setTimeout(() => getRates(converterData.source), 5000);
            });
    }

    useEffect(() => {
        if (list.length > 0) {
            const newRate = list.find(item => item.code === converterData.target).rate;
            setRate(newRate);
            setConverterData({
                ...converterData,
                targetValue: (converterData.sourceValue * newRate).toFixed(2),
            });
        }
        // eslint-disable-next-line
    }, [list]);

    useEffect(() => {
        getRates("EUR");
        // eslint-disable-next-line
    }, []);

    const onSaveList = (event) => {
        event.preventDefault();
        if (!loading) {
            setSavedList([{
                id: savedList.length ? savedList[0].id + 1 : 0,
                source: converterData.source,
                sourceValue: Number(converterData.sourceValue).toFixed(2),
                target: converterData.target,
                targetValue: Number(converterData.targetValue).toFixed(2),
                rate: rate,
            }, ...savedList]);
        }
    }

    const onSourceChange = ({ target }) => {
        setConverterData({
            ...converterData,
            sourceValue: target.value,
            targetValue: Number(target.value * rate).toFixed(2),
        });
    }

    const onTargetChange = ({ target }) => {
        setConverterData({
            ...converterData,
            sourceValue: Number(target.value / rate).toFixed(2),
            targetValue: target.value,
        });
    }

    const onSourceSelect = ({ target }) => {
        setConverterData({
            ...converterData,
            source: target.value,
        });
        getRates(target.value);
    }

    const onTargetSelect = ({ target }) => {
        const newRate = list.find(item => item.code === target.value).rate;
        setRate(newRate);
        setConverterData({
            ...converterData,
            target: target.value,
            targetValue: Number(converterData.sourceValue * newRate).toFixed(2),
        });
    }

    return (
        <form onSubmit={onSaveList}>
            <ConverterElement>
                <Controls isDisabled={loading} inputValue={converterData.sourceValue} inputOnChange={onSourceChange} selectValue={converterData.source} selectOnChange={onSourceSelect} list={list} />
            </ConverterElement>
            <ConverterElement>
                <Controls isDisabled={loading} inputValue={converterData.targetValue} inputOnChange={onTargetChange} selectValue={converterData.target} selectOnChange={onTargetSelect} list={list} />
            </ConverterElement>
            <ConverterElement>
                <NumCode number="1" code={converterData.source} />
                &nbsp;=&nbsp;
                <NumCode number={rate} code={converterData.target} />
            </ConverterElement>
            <ConverterElement>
                {
                    loading ?
                        <Loading /> :
                        <ConverterButton className="converter__saveButton">Save</ConverterButton>
                }
            </ConverterElement>
        </form>
    );
}

export default Converter;