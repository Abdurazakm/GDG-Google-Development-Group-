import React from "react";
import { useNavigate } from "react-router-dom";

function Order_summery() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Order Confirmed!</h1>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
}

export default Order_summery;
