import { useState, useEffect } from "react";
import Converter from "./Converter";
import Section from "./Section";
import SavedList from "./SavedList";
import Header from "./Header";
import Info from "./Info";
import Clock from "./Clock";
import { useLocalStorageState } from "./utils/useLocalStorageState";
import { Container, Main } from "./styled";

const App = () => {
  const [savedList, setSavedList] = useLocalStorageState("saveList", []);
  const [appDate, setAppDate] = useState(new Date());
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAppDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Main>
      <Header />
      <Container>
        <Section title="Converter" preContent={<Clock dateValue={appDate} />}>
          <Converter savedList={savedList} setSavedList={setSavedList} changeInfo={changeInfo} />
        </Section>
        <Section title="Saved List">
          <SavedList savedList={savedList} setSavedList={setSavedList} />
        </Section>
      </Container>
      <Info info={info} />
    </Main>
  );
}

export default App;