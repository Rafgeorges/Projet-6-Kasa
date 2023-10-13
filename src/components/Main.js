import logementsData from '../logements.json'
import Header from './Header';
import Banner from './Banner';
import Card from './Card';










export default function Main(){
    const cards = logementsData.map(item =>{
        return (
            <Card
             key={item.id}
             title={item.title}
             cover={item.cover}
            />
        )})

    return <div className="main">
                <Banner/>
                <div className='cards--container'>
                    {cards}
                </div>
            </div>
}