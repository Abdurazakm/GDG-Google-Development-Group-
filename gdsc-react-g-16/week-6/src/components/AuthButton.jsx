import React from "react";
import { useAuth } from "./AuthContext"; // Corrected path

const AuthButton = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <>
          <p>Welcome, User!</p>
          <button onClick={logout} className="auth-button">Logout</button>
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={login} className="auth-button">Login</button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
