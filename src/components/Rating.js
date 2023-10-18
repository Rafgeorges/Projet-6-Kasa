import StarRed from '../assets/images/star_red.png'
import StarGrey from '../assets/images/star_grey.png'



export default function Rating(props){

    const stars = [1, 2, 3, 4 ,5];
    const rating = props.rating

    return(
        <div className='rating--container'>
            {stars.map((item)=> rating>= item ?(
                <img className='rating--star' src={StarRed}/>)
                :
                (<img className='rating--star' src={StarGrey}/>)
            )}
        </div>
        )

}