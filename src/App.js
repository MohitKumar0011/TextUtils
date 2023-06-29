import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
      
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const toggleMode=()=>{
    if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor = "#1f1962"
      showAlert("Dark mode enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode enabled","success")
    }
  }
  return (
    <>
      <BrowserRouter>
      {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode = {mode} />} />
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter text to analysed" mode = {mode}/>} />
      </Routes>
        
      
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
