// App.jsx
import React from "react";
import CharacterCounter from "./components/CharacterCounter";
import "./index.css";  // Ensure it's imported here, not inside CharacterCounter.jsx

const App = () => {
  return (
    <div className="app-container">
      <CharacterCounter />
    </div>
  );
};

export default App;
