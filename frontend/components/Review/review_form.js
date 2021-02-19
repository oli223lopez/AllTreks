import React, {useEffect, useState} from 'react'




const ReviewForm = (props) => {


    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')
    // const [reviewForm, setReviewFrom]  = useState({})
    const [review, setReview] = useState({})
   
    
    useEffect(() => {
        if(Object.values(review).length){
            let completeReview = {...review, hikes_id: props.hikeID, user_id: props.userID}
            props.createReview(completeReview)
            .then(res => props.fetchHike(props.hikeID), err => console.log(err))
            .then(res => {
                setRating(0)
                setDescription('')
            })
            .then()
        }

    }, [review])



    return(
        <div>
            <form onSubmit = {() => setReview({rating: rating, description: description})}>
                Rating: <select onChange={(e) => setRating(e.currentTarget.value)} value={rating}> 
                    <option value='0' >0</option>
                    <option value='1' >1</option>
                    <option value='2' >2</option>
                    <option value='3' >3</option>
                    <option value='4' >4</option>
                    <option value='5' >5</option>
                </select>
                Description: <input type='textarea' onChange={(e) => setDescription(e.currentTarget.value)} value={description}/>
                <button type='submit'>Post Review</button>
            </form>
        </div>
    )
}
export default ReviewForm



