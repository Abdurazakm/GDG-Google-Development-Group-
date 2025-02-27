import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About US</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element = {<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
