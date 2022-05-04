import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Container>
          <hi>Hello world</hi>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
