import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Challenges from './Components/Challenges/Challenges'
import Future from './Components/Future/Future'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Challenges/>
      <Future/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App