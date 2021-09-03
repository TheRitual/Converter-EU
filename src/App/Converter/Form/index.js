import "./style.css";

const Form = ({ data }) => {

    return (
        <form className="form">
            <div className="form__element">
                <input type="number" value={data.sourceValue} min="0" id="source" className="form__field" />
                <select className="form__select">
                    <option>
                        {data.source}
                    </option>
                </select>
            </div>
            <div className="form__element">
                <input type="number" value={data.targetValue} min="0" id="target" className="form__field" />
                <select className="form__select">
                    <option>
                        {data.target}
                    </option>
                </select>
            </div>
            <div className="form__element">
                1&nbsp;<span className="form__code">
                    {data.source}
                </span>
                &nbsp;=&nbsp;{data.rate}&nbsp;
                <span className="form__code">
                    {data.target}
                </span>
            </div>
            <div className="form__element">
                <button className="form__saveButton">Save</button>
            </div>
        </form>
    );
}

export default Form;