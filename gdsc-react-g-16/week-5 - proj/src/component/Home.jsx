import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our website.</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/about')}>
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
