import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from   './components/Nav/index'
import Header from './Pages/header/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header/>
    </>
  )
}

export default App
