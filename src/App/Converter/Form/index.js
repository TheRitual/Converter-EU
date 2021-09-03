import "./style.css";

const Form = ({ data }) => {

    return (
        <form className="form">
            <div className="form__element">
                <input type="number" value="1.00" min="0" id="source" className="form__field" autofocus />
                <label for="source">{data.source}</label>
            </div>
            <div className="form__element">
                <input type="number" value="1.00" min="0" id="target" className="form__field" />
                <label for="target">{data.target}</label>
            </div>
            <div className="form__element">
                {data.source} rate: {data.target}
            </div>
        </form>
    );
}

export default Form;