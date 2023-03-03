// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const switchMode = ()=>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title= "TextUtils-Dark Mode";
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  return (
    <>
      
        <Router>
          <Navbar title="TextUtils" about="About" home="Home" mode={mode} switchMode={switchMode}/>
          <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" 
                element = {<TextForm heading ="Enter text to analyze" mode={mode} showAlert={showAlert}/>}
          />
          <Route exact path="/about"
            element = {<About/>} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
