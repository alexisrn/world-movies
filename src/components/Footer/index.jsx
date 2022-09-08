import './style.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export function Footer(){
    return (
    <footer>
    <p className='icons' target="_blank"><a href=''><FaGithub/></a> 
    <a href='https://www.linkedin.com/in/raphael-alexis-3704531b9/' target="_blank"><FaLinkedin/></a>
    </p>
    <p> Desenvolvido por Raphael Alexis</p>
    </footer>
    )
}