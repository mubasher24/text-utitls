import Nav from "./Components/Nav";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

import "./App.css";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, "1500");
   
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282a3f";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Nav title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform mode={mode} showAlert={showAlert} heading="Please Enter Text To Analyize" />
    </>
  );
}

export default App;
