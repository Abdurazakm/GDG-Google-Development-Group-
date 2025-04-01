import React from "react";
import { AuthProvider } from "./components/AuthContext";
import AuthButton from "./components/AuthButton";
// import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <h1>User Authentication</h1>
        <AuthButton />
        {/* <Home /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
