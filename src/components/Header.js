import kasaLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Header(){

    return (
        <header className='header'>
                <Link to={`/`}>
                    <img src={kasaLogo} alt='kasalogo'className='header--logo'/>
                </Link>
                <nav>
                    <ul className='kasa--menu'>
                        <NavLink  to={`/`}><li>Accueil</li></NavLink> 
                        <NavLink  to={`/About`}><li>A Propos</li></NavLink>
                    </ul>
                </nav>
        </header>
    )
}