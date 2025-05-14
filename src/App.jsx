// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Skills from './components/skills';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { Container, Row, Col, Button } from "react-bootstrap";
import GridHelper from './components/GridHelper';

function App()
{

  return (
    <>
      <Container >
          <Hero />
          <AboutMe />
          <Skills />
          {/* <Portfolio />
          <Footer /> */}
      </Container>

    </>
  )
}

export default App
