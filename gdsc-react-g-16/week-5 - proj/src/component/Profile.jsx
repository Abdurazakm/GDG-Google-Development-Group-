import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="container text-center mt-5">
      <h1>User Profile</h1>
      <p>Welcome, <strong>{username}</strong>!</p>
    </div>
  );
};

export default Profile;
