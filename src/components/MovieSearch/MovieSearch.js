import React from 'react';
import './MovieSearch.css';

const MovieSearch = ({ name, setName, movieTitle, setMovieTitle, handleSearch, movieDetails, error }) => (
    <div>
        <h2>Busca</h2>
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nome do Filme"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
        {error && <p>{error}</p>}
        {movieDetails && (
            <div>
                <p><strong>Filme:</strong> {movieDetails.movie}</p>
                <p><strong>Ano:</strong> {movieDetails.year}</p>
            </div>
        )}
    </div>
);

export default MovieSearch;