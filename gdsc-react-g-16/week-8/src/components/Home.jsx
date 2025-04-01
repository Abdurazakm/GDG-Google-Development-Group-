import React, { useState, useEffect } from "react";

const API_KEY = "your_actual_api_key"; // Replace this
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const Home = ({ addToWatchlist }) => {
  const [movies, setMovies] = useState([]); // ✅ Set default empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();
        console.log("Fetched movies:", data.results);
        setMovies(data.results || []); // ✅ Ensure data.results is valid
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies. Please try again.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Popular Movies</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="border p-2">
              <h2>{movie.title}</h2>
              <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
