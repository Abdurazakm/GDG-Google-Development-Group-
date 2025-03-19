import { useContext } from "react";
import UserContext from "./UserContext";

const GrandChild = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <button onClick={() => setUser("Updated User")}>Change User</button>
    </div>
  );
};

export default GrandChild;
