import "./style.css";

const Form = ({ appData, setAppData, savedList, setSavedList }) => {
    const onSaveList = (event) => {
        event.preventDefault();
        
        setSavedList([{
            id : savedList.length ? savedList[0].id + 1 : 0,
            source : appData.source,
            sourceValue : appData.sourceValue,
            target : appData.target,
            targetValue : appData.targetValue,
            rate : appData.rate,
        }, ...savedList]);
        console.log(savedList);
    }

    const onSourceChange = ({ target }) => {
        setAppData({
            ...appData,
            sourceValue: target.value,
        });
    }

    const onTargetChange = ({ target }) => {
        setAppData({
            ...appData,
            targetValue: target.value,
        });
    }
    

    return (
        <form className="form" onSubmit={onSaveList}>
            <div className="form__element">
                <input onChange={onSourceChange} step="any" type="number" value={appData.sourceValue} min="0" id="source" className="form__field" />
                <select className="form__select">
                    <option>
                        {appData.source}
                    </option>
                </select>
            </div>
            <div className="form__element">
                <input onChange={onTargetChange} step="any" type="number" value={appData.targetValue} min="0" id="target" className="form__field" />
                <select className="form__select">
                    <option>
                        {appData.target}
                    </option>
                </select>
            </div>
            <div className="form__element">
                1&nbsp;<span className="form__code">
                    {appData.source}
                </span>
                &nbsp;=&nbsp;{appData.rate}&nbsp;
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