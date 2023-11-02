
export default function Section(prop){
    return <section>
        <div className="section--topimage--container">
            <h1 className='section--topimage--titre'>{prop.text}</h1>
            <img src={prop.image} className="section--topimage"/>                       
        </div>
    </section>
}