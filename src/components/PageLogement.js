import Footer from "./Footer"
import Header from "./Header"
import Logement from "./Logement"
import logementsData from '../logements.json'
import { useParams } from "react-router-dom"


export default function PageLogement(){    
    const params = useParams()

    //Obtention de l'index du logement de cette page
    const index = logementsData.findIndex(item => item.id === params.id);
    const currentLogement = logementsData[index]

    
     return <div>
                <Header/>
                <Logement
                    key={currentLogement.id}
                    title={currentLogement.title}
                    description={currentLogement.description}
                    cover={currentLogement.cover}
                    location={currentLogement.location}
                    hostname={currentLogement.host.name}
                    hostpicture={currentLogement.host.picture}
                />
                <Footer/>
            </div>
     }
 