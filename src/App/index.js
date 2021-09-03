import { useState } from "react";
import Header from "./Header";
import Info from "./Info";

const App = () => {
  const [info, setInfo] = useState({
    message: "Downloading information about exchange rates",
    isError: true,
    showInfo: true,
  });

  return (
    <main>
      <Header/>
      <Info info={info} />
    </main>
  );
}

export default App;