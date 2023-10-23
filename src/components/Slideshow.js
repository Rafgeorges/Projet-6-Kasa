import logementsData from '../logements.json'
import { useParams } from "react-router-dom"
import { useState } from 'react';

export default function Slideshow(){

    const params = useParams()
    //Obtention de l'index du logement de cette page
    const index = logementsData.findIndex(item => item.id === params.id);
    const currentLogement = logementsData[index]
    const logementPictures = currentLogement.pictures

    //Définition d'un state qui servira d'index à la galerie
    const [PictureCount, SetPictureCount] = useState(0)
    
    function nextSlide(){
        //Si l'index est plus petit que le nombre maximum d'image, ajouter 1 à l'index, sinon, le repasser a 0
        SetPictureCount(
            (PictureCount<logementPictures.length-1)? prevState => prevState+1 :0)  
         console.log(PictureCount)
    }
    function prevSlide(){
            SetPictureCount(
                (PictureCount === 0) ? 4 : prevState => prevState-1 )
        console.log(PictureCount)
    }
    return <>
            <button className='btn-next' onClick={nextSlide}>NEXT</button>
            <button className='btn-prev' onClick={prevSlide}>PREV</button>
            <img src={logementPictures[PictureCount]} alt={currentLogement.title} />
            </>
    

}