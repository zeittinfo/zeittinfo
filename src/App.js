import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Caro from './Components/Home/car/Caro'
import Servicies from './Components/Home/Servicies/Servicies';
import Industries from './Components/Home/Industries/Industries';
import Content from './Components/Home/Content/Content';
import About from './Components/Home/About/About';
import Contactus from './Components/Contactus/Contactus';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Caro/>
      <Servicies/>
      <Industries/>
      <Content/>
      <About/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
