import './App.scss'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx';
import Vehicle from './components/vehicle/Vehicle.jsx';

function App() {
  return (
    <>
      <section id="Homepage">
        <Header />
        <Hero />
      </section>
      <section id="Vehicle">
      <Vehicle />
Your Vehicle
      </section>
    </>
  )
}

export default App
