import Form from "./Form";
import Loading from "./Loading";
import "./style.css";

const Converter = ({ appData, setAppData, savedList, setSavedList }) => {

    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            {appData.isLoading ? <Loading /> : <Form appData={appData} setAppData={setAppData} savedList={savedList} setSavedList={setSavedList} />}
        </section>
    );
}

export default Converter;