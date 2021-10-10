import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import About from './components/About'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      showAlert("dark mode enabled", "success");
      document.title = "TextUtil Dark mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled", "success");
      document.title = "TextUtil Light mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">  {/* for matchinf the exact path*/}
              <Textform showAlert={showAlert} heading="enter the text to analyse" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
//<Textform heading ="enter the text to analyse"/>