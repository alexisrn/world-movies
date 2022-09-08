import {useState, useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard';

import './style.css'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
    
export function Home(){
    const [topMovies, setTopMovies] = useState([]);

    const getTopMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json();

        setTopMovies(data.results)
    }

    useEffect(() =>{
        const topMoviesUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
        getTopMovies(topMoviesUrl);
    },[]);



    return (
        <div className="container">
            <h2 className='title'>Melhores filmes</h2>
            <div className='moviesContainer'>
                {topMovies.length === 0 && <p>Loading</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard  key={movie.id}movie={movie}/>)}
            </div>
        
        </div>
    )
}