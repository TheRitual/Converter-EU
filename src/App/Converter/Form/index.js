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
                {data.source} rate: {data.rate}
            </div>
        </form>
    );
}

export default Form;