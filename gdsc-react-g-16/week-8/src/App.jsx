import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Watchlist from "./components/Watchlist.jsx";
import "./index.css";

const App = () => {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  };

  return (
    <Router>
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <Link to="/" className="text-lg font-bold">Home</Link>
        <Link to="/watchlist" className="text-lg font-bold">Watchlist ({watchlist.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToWatchlist={addToWatchlist} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
      </Routes>
    </Router>
  );
};

export default App;