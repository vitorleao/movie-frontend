import React from 'react';
import HeaderTwo from './HeaderTwo';
import TextInput from './TextInput';
import SearchButton from './SearchButton';
import InlineText from './InlineText';

const MovieSearch = ({ name, setName, movieTitle, setMovieTitle, handleSearch, movieDetails, error }) => (
    <div>
        <HeaderTwo>Busca</HeaderTwo>
        <form onSubmit={handleSearch}>
            <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
            />
            <TextInput
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                placeholder="Digite o nome do filme"
            />
            <SearchButton>Buscar</SearchButton>
        </form>
        {error && <p>{error}</p>}
        {movieDetails && (
            <div>
                <InlineText label="Filme" text={movieDetails.movie} />
                <InlineText label="Ano" text={movieDetails.year} />
            </div>
        )}
    </div>
);

export default MovieSearch;