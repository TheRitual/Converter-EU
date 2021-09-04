import Loading from "./Loading";
import "./style.css";

const Converter = ({ rate, setRate, getRates, loading, appData, setAppData, savedList, setSavedList, list, setList }) => {
    const onSaveList = (event) => {
        event.preventDefault();
        if(!loading) {
            setSavedList([{
                id: savedList.length ? savedList[0].id + 1 : 0,
                source: appData.source,
                sourceValue: Number(appData.sourceValue).toFixed(2),
                target: appData.target,
                targetValue: Number(appData.targetValue).toFixed(2),
                rate: rate,
            }, ...savedList]);
        }
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
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            <form className="form" onSubmit={onSaveList}>
                <div className="form__element">
                    <input disabled={loading} onChange={onSourceChange} step="any" type="number" value={appData.sourceValue} min="0" id="source" className="form__field" />
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
                    <input disabled={loading} onChange={onTargetChange} step="any" type="number" value={appData.targetValue} min="0" id="target" className="form__field" />
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
                {
                    loading ?
                        <Loading /> :
                        <div className="form__element">
                            <button className="form__saveButton">Save</button>
                        </div>
                }
            </form>
        </section>
    );
}

export default Converter;