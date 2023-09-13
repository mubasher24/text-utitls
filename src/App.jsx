
import Nav from './Components/Nav'
import Textform from './Components/Textform'

import './App.css'
import { useState } from 'react'

function App() {

  const [mode , setMode] = useState('light')

  const toggleMode = () =>{

    if (mode === 'light'){
      setMode('dark')
    }
    else
    setMode('light')
  }
 

  return (
    <>
    <Nav title="Text-Utils" mode={mode} toggleMode = {toggleMode}  />
    <Textform  heading = "Please Enter Text To Analyize" />
     
    </>
  )
}

export default App
