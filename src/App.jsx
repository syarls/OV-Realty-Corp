import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/header'
import Properties from './components/Properties/properties'
import Contacts from './components/Contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Properties/>
      <Contacts/>
    </div>
  )
}

export default App
