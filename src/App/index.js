import { useEffect, useState } from "react";
import Converter from "./Converter";
import SavedList from "./SavedList";
import Header from "./Header";
import Info from "./Info";
import "./style.css";

const App = () => {
  const [info, setInfo] = useState({
    message: "Downloading information about exchange rates",
    isError: false,
    showInfo: true,
  });

  const showInfo = (information, error) => {
    setInfo({
      message: information,
      isError: error,
      showInfo: true,
    });
  }

  const hideInfo = () => {
    setInfo({ ...info, showInfo: false });
  }

  const [savedList, setSavedList] = useState([]);

  const [appData, setAppData] = useState({
    source: "EUR",
    target: "PLN",
    sourceValue: 21.37,
    targetValue: 21.37,
    rate: 21.37,
    isLoading: true,
  });

  const showLoading = () => {
    setAppData({ ...appData, isLoading: true });
  }

  const hideLoading = () => {
    setAppData({ ...appData, isLoading: false });
  }

  const [list, setList] = useState([]);

  const getRates = (currency) => {
    showInfo("Obtaining rates for " + currency, false);
    fetch("https://api.exchangerate.host/latest?base=" + currency)
      .then(response => {
        showInfo("Done", false);
        return response.json()
      })
      .then(list => {
        console.log(list);
        setList(list.rates);
        hideInfo();
        hideLoading();
      })
      .catch(error => {
        showInfo("Can't obtain rates for " + currency + ". Check console for more information.", true);
        console.error(error);
      });
  }

  useEffect(() => {
    getRates("EUR");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="main">
        <Header />
        <section className="container">
          <Converter appData={appData} setAppData={setAppData} savedList={savedList} setSavedList={setSavedList} />
          <SavedList savedList={savedList} setSavedList={setSavedList} />
        </section>
      </main>
      <Info info={info} />
    </>
  );
}

export default App;