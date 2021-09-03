import { useState } from "react";
import Converter from "./Converter";
import Header from "./Header";
import Info from "./Info";

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
    <main>
      <Header />
      <Converter data={data} />
      <Info info={info} />
    </main>
  );
}

export default App;