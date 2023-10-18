import Tags from "./Tags";
import { useParams } from "react-router-dom"
import logementsData from '../logements.json'



export default function Logement(props){

    const params = useParams()
    //Obtention de l'index du logement de cette page
    const index = logementsData.findIndex(item => item.id === params.id);
     console.log(logementsData[index].tags)


    //Fonction Logement
    return <div className="logement--container">
                <img className='logement--cover'src={props.cover} alt={props.title}/>
                <div className="logement--content">
                    <div className="logement--content--left-side">
                        <h1 className="logement--title">{props.title}</h1> 
                        <p className="logement--description">{props.location}</p>
                        <Tags
                            key={logementsData[index].tags}
                        />
                        
                    </div>
                    <div className="right-side">
                        <p>{props.hostname}</p>
                        <img src ={props.hostpicture} alt={props.hostname}/>
                    </div>
                </div>
                <div className="logement--deroulants">
                    descriptions
                </div>
           </div>
}