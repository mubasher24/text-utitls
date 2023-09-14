import About from "./Components/About";
import Textform from "./Components/Textform";
import Layout from "./Layout";
import { Routes , Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, "1500");
  };
  return (
    <Routes>
      <Route path="/" element={<Layout alert={alert} setMode={setMode} />} >
          <Route
        index
          element={
            <Textform
              mode={mode}
              showAlert={showAlert}
              heading="Please Enter Text To Analyize"
            />
        }
      />
         <Route path="/about" element={<About />} />
         </Route>
    </Routes>
  );
}

export default App;
