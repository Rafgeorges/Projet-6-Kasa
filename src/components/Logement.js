import Tags from "./Tags";
import { useParams } from "react-router-dom"
import logementsData from '../logements.json'
import Rating from "./Rating"
import Collapse from './Collapse'
import Slideshow from "./Slideshow";



export default function Logement(props){

    const params = useParams()
    //Obtention de l'index du logement de cette page
    const index = logementsData.findIndex(item => item.id === params.id);
    const currentLogement = logementsData[index]

    console.log(currentLogement.rating)

return <div className="logement--container">
                <Slideshow/>
                <div className="logement--content">
                    <div className="logement--content--left-side">
                        <h1 className="logement--title">{props.title}</h1> 
                        <p className="logement--localisation">{props.location}</p>
                        <Tags
                            key={currentLogement.tags}
                        />
                        
                    </div>
                    <div className="logement--content--right-side">
                        <div className="logement--host--container">
                            <p className="logement--host--name">{props.hostname}</p>
                            <img className='logement--host--picture'
                                 src ={props.hostpicture} 
                                 alt={props.hostname}
                            />
                        </div>
                        <Rating
                            rating={currentLogement.rating}
                            key={currentLogement.title}
                            />
                        
                            
                           
                       
                    </div>
                </div>
                <div className="logement--deroulants">
                    <Collapse
                        title='Description'
                        content={currentLogement.description}/>
                    <Collapse
                        title='Équipements'
                        content={currentLogement.equipments}/>
                </div>
           </div>
}