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

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>   
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Footer></Footer>

 </div>
    </>
  )
}

export default App
