import Header from './Header';
import Banner from './Banner';
import Card from './Card';
import logementsData from '../logements.json'










export default function Main(){
    const cards = logementsData.map(item =>{
        return (
            <Card
             key={item.id}
             title={item.title}
            />
        )})

    return <div className="main">
                <Header/>
                <Banner/>
                <div className='cards--container'>
                    {cards}
                </div>
                   
            </div>
}