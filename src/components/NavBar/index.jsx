import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

import './style.css';

export const NavBar = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(!search)return

    navigate(`/search?q=${search}`);
    setSearch('');
  }

    return(
        <nav id='navBar'>
        <h2>
          <Link to ='/'><BiCameraMovie/>World Movies</Link>
        </h2>
       <div className='formSearch'>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder=' Pesquise por um filme' onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button type='submit'><span><BiSearchAlt2/></span></button>
       </form>
        </div> 
      </nav>
    )
}