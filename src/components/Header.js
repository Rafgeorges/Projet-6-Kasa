import kasaLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


export default function Header(){

    return (
        <header className='header'>
                <Link to={`/`}>
                    <img src={kasaLogo} alt='kasalogo'className='header--logo'/>
                </Link>
                <nav>
                    <ul className='kasa--menu'>
                        <li>ACCUEIL</li>
                        <li>A PROPOS</li>
                    </ul>
                </nav>
        </header>
    )
}