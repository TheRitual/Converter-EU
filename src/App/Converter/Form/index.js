import "./style.css";

const Form = ({ rate, setRate, getRates, appData, setAppData, savedList, setSavedList, list }) => {
    const onSaveList = (event) => {
        event.preventDefault();

        setSavedList([{
            id: savedList.length ? savedList[0].id + 1 : 0,
            source: appData.source,
            sourceValue: Number(appData.sourceValue).toFixed(2),
            target: appData.target,
            targetValue: Number(appData.targetValue).toFixed(2),
            rate: rate,
        }, ...savedList]);
        console.log(savedList);
    }

    const onSourceChange = ({ target }) => {
        setAppData({
            ...appData,
            sourceValue: target.value,
            targetValue: Number(target.value * rate).toFixed(2),
        });
    }

    const onTargetChange = ({ target }) => {
        setAppData({
            ...appData,
            sourceValue: Number(target.value / rate).toFixed(2),
            targetValue: target.value,
        });
    }

    const onSourceSelect = ({ target }) => {
        setAppData({
            ...appData,
            source: target.value,
        });
        getRates(target.value);
    }

    const onTargetSelect = ({ target }) => {
        const newRate = list.find(item => item.code === target.value).rate;
        setRate(newRate);
        setAppData({
            ...appData,
            target: target.value,
            sourceValue: Number(appData.targetValue / newRate).toFixed(2),
        });
    }

    return (
        <form className="form" onSubmit={onSaveList}>
            <div className="form__element">
                <input onChange={onSourceChange} step="any" type="number" value={appData.sourceValue} min="0" id="source" className="form__field" />
                <select className="form__select" value={appData.source} onChange={onSourceSelect}>{
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
                <input onChange={onTargetChange} step="any" type="number" value={appData.targetValue} min="0" id="target" className="form__field" />
                <select className="form__select" value={appData.target} onChange={onTargetSelect}>{
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
                    {appData.source}
                </span>
                &nbsp;=&nbsp;{rate}&nbsp;
                <span className="form__code">
                    {appData.target}
                </span>
            </div>
            <div className="form__element">
                <button className="form__saveButton">Save</button>
            </div>
        </form>
    );
}

export default Form;