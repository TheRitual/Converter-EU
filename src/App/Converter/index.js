import Form from "./Form";
import Loading from "./Loading";
import "./style.css";

const Converter = ({ data }) => {

    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            {data.isLoading ? <Loading /> : <Form data={data} />}
        </section>
    );
}

export default Converter;