import Footer from "./Footer"
import Header from "./Header"
import Logement from "./Logement"
import logementsData from '../logements.json'
import { useParams } from "react-router-dom"


export default function PageLogement(){    
    const params = useParams()

    //Obtention de l'index du logement de cette page
    const index = logementsData.findIndex(item => item.id === params.id);
    
     return <>
        <Header/>
        <Logement
            key={logementsData[index].id}
            title={logementsData[index].title}
            description={logementsData[index].description}
            cover={logementsData[index].cover}
            location={logementsData[index].location}
            hostname={logementsData[index].host.name}
            hostpicure={logementsData[index].host.picture}
            tags = {logementsData[index].tags}
        />
        <Footer/>
        </>
     }
 