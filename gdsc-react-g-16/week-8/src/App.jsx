import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // You can create a CSS file for styling

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual TMDb API key
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Component to display the list of movies
const MovieList = ({ addToWatchlist }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_URL);
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []); // Fetch movies only once on component mount

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Show error message
    }

    return (
        <div className="movie-list">
            <h1>Popular Movies</h1>
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <h2>{movie.title}</h2>
                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                    <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
                </div>
            ))}
        </div>
    );
};

// Component to display the user's watchlist
const Watchlist = ({ watchlist }) => {
    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-card">
                        <h2>{movie.title}</h2>
                        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))
            )}
        </div>
    );
};

// Main App component with routing and state management
const App = () => {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        // Check if the movie is already in the watchlist to prevent duplicates
        if (!watchlist.find((m) => m.id === movie.id)) {
            setWatchlist([...watchlist, movie]);
        }
    };

    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Movies</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watchlist ({watchlist.length})</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<MovieList addToWatchlist={addToWatchlist} />} />
                    <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;