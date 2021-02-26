import React, {useEffect, useState} from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const ReviewForm = (props) => {


    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')
    // const [reviewForm, setReviewFrom]  = useState({})
    const [review, setReview] = useState({})
    const [star, setStar] = useState(5)
   
    
    useEffect(() => {
        if(Object.values(review).length){
            let completeReview = {...review, hikes_id: props.hikeID, user_id: props.userID}
            props.createReview(completeReview)
            .then(res => props.fetchHike(props.hikeID), err => console.log(err))
            .then(res => {
                setRating(5)
                setDescription('')
            })
            .then()
        }

    }, [review])


    // useEffect(() => {

    // }, [star])



    return(
        <div>
            <form onSubmit = {() => setReview({rating: star, description: description})}>
                <label>
                    <div className='reviewFormRating'>
                        Rating: 
                    </div>
                    <div className='reviewStars'>
                        <div className='reviewStar1' >
                        <FontAwesomeIcon icon={faStar} onClick={() => setStar(1)} value='1' style={star >= 1 ? {color: 'gold'} : null}/>
                        </div>
                        <div className='reviewStar2'>
                        <FontAwesomeIcon icon={faStar} onClick={() => setStar(2)} value='2'  style={star >= 2 ? { color: 'gold' } : null}/>
                        </div>
                        <div className='reviewStar3'>
                        <FontAwesomeIcon icon={faStar} onClick={() => setStar(3)} value='3'  style={star >= 3 ? { color: 'gold' } : null}/>
                        </div>
                        <div className='reviewStar4' >
                        <FontAwesomeIcon icon={faStar} onClick={() => setStar(4)} value='4' style={star >= 4 ? { color: 'gold' } : null}/>
                        </div>
                        <div>

                        <FontAwesomeIcon icon={faStar} onClick={() => setStar(5)} value='5' className='reviewStar5' style={star >= 5 ? { color: 'gold' } : null}/>
                        </div>

                    </div>
                </label>
                <div className='reviewFormDescription'>
                    <div className='reviewFormDescriptionTitle'>
                        Description:
                    </div>
                    <div >
                        <textarea onChange={(e) => setDescription(e.currentTarget.value)} value={description} className='reviewFormDescriptionInput' placeholder='Give back to the community! Share your thoughts about the trail so others know what to expect!'/>
                    </div>
                    <button type='submit' className='reviewFormDescriptionButton'>Post Review</button>
                </div>
            </form>
        </div>
    )
}
export default ReviewForm



