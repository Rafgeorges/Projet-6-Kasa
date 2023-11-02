import { Link } from 'react-router-dom';
import logementsData from '../logements.json'
import Banner from './Banner';
import Card from './Card';
import fond1 from '../assets/images/fond1.png'


export default function Main(){
    const cards = logementsData.map(item =>{
        return (
            <Link to={`/logements/${item.id}`}>
            <Card
             key={item.id}
             title={item.title}
             cover={item.cover}
            />
            </Link>
            
        )})
    return <div className="main">
                <Banner
                    image={fond1}
                    text='Chez vous, partout et ailleurs'
                />
                <div className='cards--container'>
                    {cards}
                </div>
            </div>
}