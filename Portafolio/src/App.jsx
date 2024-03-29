import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Nav/Navbar'
import MyName from './components/MyName/MyName'
import About from './components/About/AboutSection1/About'
import AboutFirts from './components/About/AboutSection2/AboutFirts'
import AboutSecond from './components/About/AboutSection3/AboutSecond'
import Skills from './components/Skills/Skills'
import MyProyects from './components/MyProyects/MyProyects'
import  Contact  from './components/Contact/Contact'

function App() {


  return (
    <div className="App">
    <Navbar/>
    <MyName/>
    <About/>
    <AboutFirts/>
    <AboutSecond/>
    <Skills/>
    <MyProyects/>
    <Contact/>
  </div>
  )
}

export default App
