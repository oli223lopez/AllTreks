
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Profile = (props) => {

    const [reviewOrPhoto, setReviewOrPhoto] = useState(0)
    const [photoPreview, setPhotoPreview] = useState()

    useEffect(() => {
        props.getUser(props.username)
    }, [])


    useEffect(() => {
        if (photoPreview) {
            if (Object.values(photoPreview).length) {
                const pictureModal = document.getElementById('pictureModal')
                pictureModal.style.display = 'block'
            } else {
                const pictureModal = document.getElementById('pictureModal')
                pictureModal.style.display = 'none'
            }
        }
    }, [photoPreview])






    return(
        <div>
            <div className='profileUsername'>
                {props.user.username}'s Profile
            </div>
            <div>
                <div className='profileReviewOrPhoto'>
                    <div className='profileReviewTitle' 
                        onClick={() => setReviewOrPhoto(0)}
                        style={reviewOrPhoto === 0 ? { color: '#428a13', borderBottom: '3px solid #428a13' } : null}>
                        Reviews 
                    </div>
                    <div className='profilePhotoTitle'
                        onClick={() => setReviewOrPhoto(1)}
                        style={reviewOrPhoto === 1 ? { color: '#428a13', borderBottom: '3px solid #428a13' } : null}>
                        Photos
                    </div> 
                </div>

                {reviewOrPhoto === 0 ? 
                <div>
                    {props.user.reviews.map((review, idx) => {
                        return(
                            <div key={idx}> 
                                <div className='reviews'> 
                                    <Link to={`/hike/${review.hike.id}`} className='reviewHikeLink'> 
                                        <div className='reviewHikeName'>
                                            Visit: {review.hike.name}
                                        </div>
                                    <div className='reviewStars'>
                                        <div className='reviewStar1' >
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 1 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar2'>
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 2 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar3'>
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 3 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar4' >
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 4 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar5'>
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 5 ? { color: 'gold' } : null} />
                                        </div>
                                    </div>
                                    <div className='reviewDescription'>
                                        {review.description}
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :

                    <div>
                        <div className='profilePhotos'>
                            {props.user.photos.map((photo, idx) => {
                                return (
                                    <div key={idx} className='profilePhoto'>
                                        <div>
                                            <Link to={`/hike/${photo.hike.id}`} className='reviewHikeLink'> 
                                            <div className='photoHikeName'>
                                                Visit: {photo.hike.name}
                                            </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <img src={photo.photoUrl} width='250px' height='200px' onClick={() => setPhotoPreview(photo.photoUrl)}
                                            className='profileHikePhoto'/>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                        <div id='pictureModal'>
                            <div className='pictureModalContents'>
                                <button onClick={() => setPhotoPreview({})} className='closeModalButton'>Close Preview</button>
                                <div></div>

                                <img src={photoPreview} className='pictureInModal' />
                            </div>
                        </div> 

                    </div>
                }
            </div>
                    
            
        
        </div>
    )

}


export default Profile