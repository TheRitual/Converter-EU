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
  });

  const changeInfo = (information, error) => {
    setInfo({
      message: information,
      isError: error,
    });
  }

  const [savedList, setSavedList] = useState([]);

  return (
    <>
      <main className="main">
        <Header />
        <section className="container">
          <Converter savedList={savedList} setSavedList={setSavedList} changeInfo={changeInfo} />
          <SavedList savedList={savedList} setSavedList={setSavedList} />
        </section>
      </main>
      <Info info={info} />
    </>
  );
}

export default App;