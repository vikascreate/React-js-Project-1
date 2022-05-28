import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React from 'react';
//import './App.css';
import './Components/styles.css';
function App() {
  const [mode,setMode]=React.useState(false)
  function toggle(){
    setMode(prev => !prev)
  }
  return (
    <div className="App">
      <Navbar darkMode={mode} toggleDarkMode={toggle}/>
      <Main   darkMode={mode}/>
    </div>
  );
}

export default App;
