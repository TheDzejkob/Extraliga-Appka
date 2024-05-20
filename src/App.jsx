import './App.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zapasy from './pages/Zapasy';
import Navbar from './components/Navbar';
import Tabulka from "./pages/Tabulka";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <BrowserRouter>
        <Navbar />
        <button className="btn btn-secondary m-3" onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Routes>
          <Route path="/" element={<Tabulka />} />
          <Route path="/zapasy" element={<Zapasy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
