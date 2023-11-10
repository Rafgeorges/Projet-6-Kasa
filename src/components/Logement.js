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

    const equipListe = currentLogement.equipments.map((item, index) => {
        return <li key={index}>{item}</li>
    })
return <div className="logement--container">
                <Slideshow/>
                <div className="logement--content">
                    <div className="logement--content--left-side">
                        <h1>{props.title}</h1> 
                        <p>{props.location}</p>
                        <Tags/>
                        
                    </div>
                    <div className="logement--content--right-side">
                        <div className="logement--host--container">
                            <p>{props.hostname}</p>
                            <img 
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
                        content={equipListe}/>
                </div>
           </div>
}