import { useState } from "react";
import "./App.css";

function App() {
  // initialize dark mode state
  const [darkMode, setDarkMode] = useState(true);

  // toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // return App component with conditional rendering based on dark mode state
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>Modo oscuro en tu aplicación de react!</h1>
      <button onClick={toggleDarkMode}>{darkMode ? "🌙" : "🌑"}</button>
    </div>
  );
}

export default App;
