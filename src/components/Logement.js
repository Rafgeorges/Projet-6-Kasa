import Tags from "./Tags"






export default function Logement(props){

    return <div className="logement--container">
                <img className='logement--cover'src={props.cover} alt={props.title}/>
                <div className="logement--content">
                    <div className="left-side">
                        <h1 className="logement--title">{props.title}</h1> 
                        <p className="logement--description">{props.location}</p>
                        <Tags/>
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