import { useState, useEffect } from "react";
import Loading from "./Loading";
import "./style.css";

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
        fetch("https://api.exchangerate.host/latest?base=" + currency)
            .then(response => {
                return response.json()
            })
            .then(currencyList => {
                changeInfo("I am ready to use!", false);
                setList(createList(currencyList.rates));
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
    }, [list])

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
            sourceValue: Number(converterData.targetValue / newRate).toFixed(2),
        });
    }

    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            <form className="form" onSubmit={onSaveList}>
                <div className="form__element">
                    <input disabled={loading} onChange={onSourceChange} step="any" type="number" value={converterData.sourceValue} min="0" id="source" className="form__field" />
                    <select className="form__select" value={converterData.source} onChange={onSourceSelect}>{
                        list.map((item, index) => {
                            return (
                                <option key={index} value={item.code}>
                                    {item.code}
                                </option>
                            )
                        })
                    }</select>
                </div>
                <div className="form__element">
                    <input disabled={loading} onChange={onTargetChange} step="any" type="number" value={converterData.targetValue} min="0" id="target" className="form__field" />
                    <select className="form__select" value={converterData.target} onChange={onTargetSelect}>{
                        list.map((item, index) => {
                            return (
                                <option key={index} value={item.code}>
                                    {item.code}
                                </option>
                            )
                        })
                    } </select>
                </div>
                <div className="form__element">
                    1&nbsp;<span className="form__code">
                        {converterData.source}
                    </span>
                    &nbsp;=&nbsp;{rate}&nbsp;
                    <span className="form__code">
                        {converterData.target}
                    </span>
                </div>
                <div className="form__element">
                    {
                        loading ?
                            <Loading /> :
                            <button className="form__saveButton">Save</button>
                    }
                </div>
            </form>
        </section>
    );
}

export default Converter;