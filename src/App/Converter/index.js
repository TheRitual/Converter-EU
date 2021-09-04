import Form from "./Form";
import Loading from "./Loading";
import "./style.css";

const Converter = ({ rate, setRate, getRates, loading, appData, setAppData, savedList, setSavedList, list, setList }) => {

    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            {loading ? <Loading /> : <Form rate={rate} getRates={getRates} setRate={setRate} appData={appData} setAppData={setAppData} savedList={savedList} setSavedList={setSavedList} list={list} setList={setList} />}
        </section>
    );
}

export default Converter;