import React from "react";

const Watchlist = ({ watchlist }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies added to the watchlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.id} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
