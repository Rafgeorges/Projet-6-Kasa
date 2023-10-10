import kasaLogo from '../assets/images/logo.png'

export default function Header(){

    return (
        <header className='header'>
                <img src={kasaLogo} alt='kasalogo'className='header--logo'/>
                <nav>
                    <ul className='kasa--menu'>
                        <li>Accueil</li>
                        <li>A propos</li>
                    </ul>
                </nav>
        </header>
    )
}