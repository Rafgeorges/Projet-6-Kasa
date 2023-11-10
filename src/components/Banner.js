
export default function Section(prop){
    return <section>
        <div className="banner_container">
            <h1 >{prop.text}</h1>
            <img src={prop.image}/>                       
        </div>
    </section>
}