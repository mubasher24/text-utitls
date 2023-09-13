import Nav from "./Components/Nav";
import Textform from "./Components/Textform";

import "./App.css";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

 const toggleMode = () => {
   if (mode === "light") {
     setMode("dark");
     document.body.style.backgroundColor = "#282a3f"; 
   } else {
     setMode("light");
     document.body.style.backgroundColor = "white"; 
   }
 };
  return (
    <>
      <Nav title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Textform mode={mode} heading="Please Enter Text To Analyize" />
    </>
  );
}

export default App;
