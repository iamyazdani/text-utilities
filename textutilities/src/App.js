// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';
// import About from './components/About';
// import HandleCapitalize from './components/HandleCapitalize';

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
      document.body.style.backgroundColor = '#042743'; 
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtilities - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtilities is amazing';
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'Install TextUtilities now';
      // }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtilities - Light Mode';
      // setInterval(() => {
      //   document.title = 'TextUtilities is amazing';
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'Install TextUtilities now';
      // }, 2000);
    }
  }

  return (
    <>
    {/* <HandleCapitalize /> */}
    <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About heading="About us" /> */}
    </div>
    </> 
  );
}

export default App;
