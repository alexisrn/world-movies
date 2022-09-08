import {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard';
import{
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsArrowReturnLeft,
    
} from 'react-icons/bs';

import './style.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
    
export function Movie(){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json();

        setMovie(data);
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US",{
            style: "currency",
            currency: "USD",
        })
    }

 useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`
        getMovie(movieUrl);
 },[])
    return (
        <div className='moviePage'>
            {movie && (
            <>
            <MovieCard movie={movie} showLink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp /> Faturamento:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div className="description">
                <h3>
                    <BsWallet2 /> Descrição
                </h3>
                <p>{movie.overview}</p>
            </div>
          <div className='back'><Link to='/'><BsArrowReturnLeft/><span>Retornar</span></Link></div> 
            </>
            )}
            </div>
        )
};