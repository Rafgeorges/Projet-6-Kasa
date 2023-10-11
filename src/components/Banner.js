import fond1 from '../assets/images/fond1.png'

export default function Section(){
    return <section>
        <div className="section--topimage--container">
            <h1 className='section--topimage--titre'>Chez vous, partout et ailleurs</h1>
            <img src={fond1} className="section--topimage"/>                       
        </div>
    </section>
}