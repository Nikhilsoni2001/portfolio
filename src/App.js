import Home from "./components/Home";
import styled from "styled-components";
import About from "./components/About";

function App() {
  return (
    <Container className="App">
      <Home />
      <About />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  opacity: 0.9;
`;
