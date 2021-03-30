import Home from "./components/Home";
import styled from "styled-components";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";

function App() {
  return (
    <Container className="App">
      <Home />
      <About />
      <Resume />
      <Works />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
