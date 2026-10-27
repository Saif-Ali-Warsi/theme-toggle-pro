import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeToggle() {
    if (isDarkMode === false) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: isDarkMode ? "#222" : "#fff",
          color: isDarkMode ? "#fff" : "#222",
          padding: "10px",
        }}
      >
        <h2>Dark Mode and Lite Mode</h2>

        <button onClick={handleThemeToggle}>Enable Dark Mode</button>
      </div>
    </>
  );
}

export default App;
