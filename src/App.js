import Home from "./components/Home";
import styled from "styled-components";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="App">
      <Home />
      <About />
      <Resume />
      <Works />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
