import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link className="btn btn-primary mt-3" to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
