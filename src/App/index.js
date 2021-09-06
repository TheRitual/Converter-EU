import { useState } from "react";
import Converter from "./Converter";
import Section from "./Section";
import SavedList from "./SavedList";
import Header from "./Header";
import Info from "./Info";
import Clock from "./Clock";
import { useLocalStorageState } from "./utils/useLocalStorageState";
import { Container, Main } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme"
import { useCurrentDate } from "./utils/useCurrentDate";

const App = () => {
  const [savedList, setSavedList] = useLocalStorageState("saveList", []);
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

  const time = useCurrentDate();

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Container>
          <Section title="Converter" preContent={<Clock dateValue={time} />}>
            <Converter savedList={savedList} setSavedList={setSavedList} changeInfo={changeInfo} />
          </Section>
          <Section title="Saved List">
            <SavedList savedList={savedList} setSavedList={setSavedList} />
          </Section>
        </Container>
        <Info info={info} />
      </Main>
    </ThemeProvider>
  );
}

export default App;