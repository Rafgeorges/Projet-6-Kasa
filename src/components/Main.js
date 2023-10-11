import Header from './Header';
import Banner from './Banner';
import Card from './Card';


export default function Main(){
    return <div className="main">
                <Header/>
                <Banner/>
                <div className='cards--container'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                   
            </div>
}