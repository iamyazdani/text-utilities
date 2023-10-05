import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002B36';
      showAlert("Dark mode has been enabled!", "success");
      // document.title = 'TextUtilities - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      // document.title = 'TextUtilities - Light Mode';
    }
  }

  return (
    <>
    {/* <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path='/about' element={<About mode={mode} />} />
          <Route path='/' element={<TextForm  showAlert={showAlert} mode={mode} />} />
        </Routes>
      </div>
    </Router> */}
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} mode={mode} />
      {/* <About /> */}
    </div>
    </> 
  );
}

export default App;
