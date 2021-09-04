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
  });

  const [savedList, setSavedList] = useState([]);

  const [appData, setAppData] = useState({
    source: "EUR",
    target: "PLN",
    sourceValue: 21.37,
    targetValue: 21.37,
  });

  const [rate, setRate] = useState(21.37);

  const [loading, setLoading] = useState(true);

  const [list, setList] = useState([]);

  const changeInfo = (information, error) => {
    setInfo({
      message: information,
      isError: error,
    });
  }

  const createList = (list) => {
    return Object.entries(list).map(item => {
      return { code: item[0], rate: item[1] }
    });
  }

  const getRates = (currency) => {
    setLoading(true);
    changeInfo("Obtaining rates for " + currency, false);
    fetch("https://api.exchangerate.host/latest?base=" + currency)
      .then(response => {
        return response.json()
      })
      .then(currencyList => {
        changeInfo("I am ready to use!", false);
        setList(createList(currencyList.rates));
        setLoading(false);
      })
      .catch(error => {
        changeInfo("Can't obtain rates for " + currency + ". Check console for more information.", true);
        console.error(error);
        setTimeout(() => getRates(appData.source), 5000);
      });
  }

  useEffect(() => {
    if (list.length > 0) {
      const newRate = list.find(item => item.code === appData.target).rate;
      setRate(newRate);
      setAppData({
        ...appData,
        targetValue: (appData.sourceValue * newRate).toFixed(2),
      });
    }
    // eslint-disable-next-line
  }, [list])

  useEffect(() => {
    getRates("EUR");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="main">
        <Header />
        <section className="container">
          <Converter
            rate={rate}
            loading={loading}
            setRate={setRate}
            getRates={getRates}
            appData={appData}
            setAppData={setAppData}
            savedList={savedList}
            setSavedList={setSavedList}
            list={list}
            setList={setList}
          />
          <SavedList savedList={savedList} setSavedList={setSavedList} />
        </section>
      </main>
      <Info info={info} />
    </>
  );
}

export default App;