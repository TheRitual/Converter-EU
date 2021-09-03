import { useState } from "react";
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

  const [data, setData] = useState({
    source: "EUR",
    target: "PLN",
    sourceValue: 21.37,
    targetValue: 21.37,
    rate: 21.37,
    isLoading: false,
  });

  return (
    <>
      <main className="main">
        <Header />
        <section className="container">
          <Converter data={data} />
          <SavedList />
        </section>
      </main>
      <Info info={info} />
    </>
  );
}

export default App;