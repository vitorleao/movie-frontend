import React, { useState, useEffect } from 'react';
import './Tabs.css';
import LogTable from '../LogTable/LogTable';
import MovieSearch from '../MovieSearch/MovieSearch';
import TabButton from '../TabButton/TabButton';

function Tabs() {
    const [activeTab, setActiveTab] = useState('consulta');
    const [name, setName] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDetails, setMovieDetails] = useState(null);
    const [consultas, setConsultas] = useState([]);
    const [error, setError] = useState(null);
    
    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setMovieDetails(null);

        try {
            const response = await fetch(`http://localhost:8000/movies/search?user=${name}&movie=${movieTitle}`);
            const data = await response.json();
            if (data && response.status === 200) {
                setMovieDetails(data);
            } else {
                setError('Filme não encontrado.');
            }
        } catch (error) {
            setError('Erro ao buscar o filme. Tente novamente.');
        }
    };

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('http://localhost:8000/movies/history');
                const data = await response.json();
                if (data && response.status === 200) {
                    setConsultas(Object.values(data));
                } else {
                    setError('Histórico não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar o histórico de consultas:', error);
            }
        };

        if (activeTab === 'logs') {
            fetchHistory();
        }
    }, [activeTab]);

    return (
        <div>
            <div>
                <TabButton onClick={() => setActiveTab('consulta')} isActive={activeTab === 'consulta'}>
                    Busca
                </TabButton>
                <TabButton onClick={() => setActiveTab('logs')} isActive={activeTab === 'logs'}>
                    Histórico
                </TabButton>
            </div>
            {activeTab === 'consulta' ? (
                <MovieSearch
                    name={name}
                    setName={setName}
                    movieTitle={movieTitle}
                    setMovieTitle={setMovieTitle}
                    handleSearch={handleSearch}
                    movieDetails={movieDetails}
                    error={error}
                />
            ) : (
                <LogTable consultas={consultas} />
            )}
        </div>
    );
}

export default Tabs;
