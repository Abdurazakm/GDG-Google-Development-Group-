import React, { useEffect, useState } from "react";

const App = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=ad99fe54e262f888c08925483eeeab9a";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
