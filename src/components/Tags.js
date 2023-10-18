import logementsData from '../logements.json'
import { useParams } from "react-router-dom"


export default function Tags(props) {
    
  
  //Obtention de l'index du logement de cette page
    const params = useParams()
    const index = logementsData.findIndex(item => item.id === params.id);
    const logementsTags = logementsData[index].tags //Obtention de l'array des tags

    //Création des bouttons selon l'array des tags
    const tags = logementsTags.map(item => <div className='logements--tags'>{item}</div>)
	
  return <div className='logements--tags--container'>{tags}</div>
       
  
}
