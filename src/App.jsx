import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from   './components/Nav/index'
import Header from './Pages/header/index'
import Main from './Pages/main'
import Footer from './Pages/footer'
function App() {

  return (
    <>
      <Nav />
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
