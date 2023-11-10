export default function Cards(props){
    return <div className="card">
                <img alt ={props.title} src={props.cover}/>
                <div className="overlay">
                    <p>{props.title}</p>
                </div>    
            </div>
}