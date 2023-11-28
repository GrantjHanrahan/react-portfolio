import styled from "styled-components"
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Who from './components/Who'
import Hero from './components/Hero'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: auto;
  color: #fff;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  &::--webkit-scrollbar{
    display:none;
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Portfolio/>
      <Contact/>
    </Container>
  )
}

export default App
