import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Welcome to the Home page.</p>
      <button onClick={() => navigate('/order_summery')}>Place Order</button>
    </div>
  );
};

export default Home;
