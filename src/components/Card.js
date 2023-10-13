import { Link } from "react-router-dom"

export default function Cards(props){
    return <div className="card">
            <img className="card--img" alt ={props.title} src={props.cover}/>
            <div className="overlay">
                <p className="card--title">{props.title}</p>
            </div>    
            </div>
}