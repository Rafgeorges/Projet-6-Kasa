import logementsData from '../logements.json'
import { useParams } from "react-router-dom"


export default function Tags(){

const params = useParams()

//Obtention de l'index du logement de cette page
const index = logementsData.findIndex(item => item.id === params.id);

    return <div>{logementsData[index].tags}</div>
}