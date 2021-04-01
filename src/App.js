import Home from "./components/Home/Home";
import styled from "styled-components";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Works from "./components/Projects/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
