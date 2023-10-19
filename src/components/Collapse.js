import arrow from '../assets/images/Arrow_white.png';
import { useState } from 'react';

export default function Collapse(props) {

    const [toggle, setToggle] = useState(false); //Définition d'un state, false par défault

    function toggling(){
        setToggle(prevState => !prevState)
    }

    return (
        
            <div className="collapse__container" >
                <div className='collapse__title' onClick={toggling}>
                    <h2>{props.title}</h2>
                    <img src={arrow} className={toggle?'arrow_down':'arrow_up'}/> 
                </div>
                <div className='collapse__content'>
                    {toggle && <p>{props.content}</p>}
                </div>
                
                                        
               
            </div>
        
    )
}


