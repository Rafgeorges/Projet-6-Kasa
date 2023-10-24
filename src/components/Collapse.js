import arrow from '../assets/images/Arrow_white.png';
import { useState } from 'react';

export default function Collapse(props) {

    const [toggle, setToggle] = useState(false); //Définition d'un state, false par défault

    function toggling(){
        setToggle(prevState => !prevState)
    }

    return (<div className="collapse__container" >
                <div className='collapse__header' onClick={toggling}>
                    <h2 className='collapse--title'>{props.title}</h2>
                    <img src={arrow} className={toggle?'arrow_down':'arrow_up'}/> 
                </div>
                <div className={toggle? 'content--shown':'content--hidden'}>
                    <div className={'collapse--content'}>
                        <p  className='collapse--description'>{props.content}</p>
                    </div>                     
                </div>
           </div>
            
            
    )
}
// {toggle && <p  className='collapse--description'>{props.content}</p>}