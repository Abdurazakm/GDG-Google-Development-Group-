import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Order_summery from "./component/Order_summery";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import Feature from "./component/Feature";
import New from "./component/New";
import Users from "./component/Users";
import UserDetail from "./component/UserDetail";
import Admin from "./component/admin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/order_summery" element={<Order_summery />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Feature />} />
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
