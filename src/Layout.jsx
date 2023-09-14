import { useState } from "react";
import Nav from "./Components/Nav";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
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
    <div>
      <Nav title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Outlet/>

      <Footer/>
    </div>
  );
};

export default Layout;
