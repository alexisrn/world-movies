import {Link} from 'react-router-dom';
import {FaStar} from 'react-icons/fa';

import './style.css'



const imgUrl = import.meta.env.VITE_IMG;


export function MovieCard({movie, showLink = true}){
 return   (
    <div className='movieCard'>
        <img src={imgUrl + movie.poster_path} alt={movie.title}></img>
        <h2>{movie.title}</h2>
        <p>
            <FaStar />{movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>

 )
}
