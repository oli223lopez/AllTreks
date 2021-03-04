import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Map from '../Map/map'
import ReviewFormContainer from '../Review/review_form_container'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HikeShow = (props) => {
    const [hike, setHike] = useState({})
    const [photo, setPhoto] = useState({})
    const [photoFile, setPhotoFile] = useState({})
    const [photoUrl, setPhotoUrl] = useState()
    const [reviewOrPhoto, setReviewOrPhoto] = useState(0)

    
    const [photoPreview, setPhotoPreview] = useState()

    useEffect(() => {
        props.fetchHike(props.hikeID).then(res => setHike(res.hike))
        // console.log(props.userID)

        return () => {
            props.removeHike()
        }
    }, [])

    useEffect(() => {
        props.fetchHike(props.hikeID).then(res => setHike(res.hike))
        return () => {
            props.removeHike()
        }
    }, [props.hikeID])

    
    useEffect(() => {
        if(Object.values(photo).length){
            // console.log(photo['picture'])
            const formData = new FormData()
            formData.append('photo[hike_id]', parseInt(props.hikeID, 10))
            formData.append('photo[user_id]', props.userID)
            formData.append('photo[picture]', photo['picture'])
            props.createPhoto(formData)
            .then(res => console.log(res))
        }
    }, [photo])

    useEffect(() => {
        // console.log(photoFile)
        if(photoFile){
            if(photoFile.name)
            {   const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    setPhotoUrl(fileReader.result)
                }
                if (photoFile) {
                    fileReader.readAsDataURL(photoFile);
                }
            }

        }
    }, [photoFile])

    useEffect(() => {
        setHike(props.hike)
    }, [props.hike])


    useEffect(() => {
        if(photoPreview){
            if (Object.values(photoPreview).length) {
                const pictureModal = document.getElementById('pictureModal')
                pictureModal.style.display = 'block'
            } else {
                const pictureModal = document.getElementById('pictureModal')
                pictureModal.style.display = 'none'
            }
        }
    }, [photoPreview])

    




    const ReviewOrPhoto = () => {
        if (reviewOrPhoto === 0) {
            return (
                <div className='hikeShowReviews'>
                    <div className='hikeShowReviewHeader'>
                        Write a review for {hike.name}!
                    </div>
                    <div className='reviewFormContainer'>
                        <ReviewFormContainer hikeID={props.hikeID} userID={props.userID} />
                    </div>



                    {
                        hike.reviews.map((review, idx) => {
                            return (
                                <div key={idx} className='hikeShowReview'>
                                    <div className='reviewUsername'>
                                        {review.user.username}
                                    </div>
                                    <div className='reviewStars'>
                                        <div className='reviewStar1' >
                                            <FontAwesomeIcon icon={faStar}  style={review.rating >= 1 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar2'>
                                            <FontAwesomeIcon icon={faStar}  style={review.rating >= 2 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar3'>
                                            <FontAwesomeIcon icon={faStar}  style={review.rating >= 3 ? { color: 'gold' } : null} />
                                        </div>
                                        <div className='reviewStar4' >
                                            <FontAwesomeIcon icon={faStar}  style={review.rating >= 4 ? { color: 'gold' } : null} />
                                        </div>
                                        <div  className='reviewStar5'>
                                            <FontAwesomeIcon icon={faStar} style={review.rating >= 5 ? { color: 'gold' } : null} />
                                        </div>
                                    </div>
                                    <div className='reviewDescription'>
                                        {review.description}
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            )
        } else {
            return (
                <div className='hikeShowPhotoSection'>
                    <div className='hikeShowPhotoForm'>
                        <div> 
                            <div className='hikeShowPhotoHeader'>Add a photo of this trail</div>
                            <div className='hikeShowPhotoSentence'>Photos help others preview the trail. Upload photos about this trail to inspire others.</div>
                        </div>
                        
                        <form onSubmit={() => setPhoto({ picture: photoFile })}>
                            <input type='file' onChange={((e) => setPhotoFile(e.currentTarget.files[0]))}  className='hikeShowPhotoInput' />
                            <button type='submit' className='hikeShowPhotoSubmit'>Post Photo</button>
                        </form>
                    </div>

                    {photoUrl ? <div className='photoPreview'>
                        <img src={photoUrl} height='200px' width='200px' onClick={() =>
                           setPhotoPreview(photoUrl)}/>
                    </div>
                        : null}
                    <div id='app'>
                    </div>


                    

                    <div className='hikeShowPhotos'>
                        {hike.photos.map((photo, idx) => {
                            return(
                                <div key={idx}> 
                                    <img src={photo.photoUrl} width='100px' height='100px' className='hikePhoto' onClick={() => setPhotoPreview(photo.photoUrl)}/>
                                </div>
                            )
                        })}
                    </div>

                </div>

            )
        }

    }
       
   




    return(
        <div className='hikeShowContainer'>
            {Object.values(hike).length ? 
            <div className='hikeShow'>
                <div className='hikeShowPhotoContainer'>
                    <img src={hike.photos[0].photoUrl} className='hikeShowPhoto' />
                </div>

                <div className='hikeShowName-Difficulty'> 
                    <div className='hikeShowName'> 
                        {hike.name}
                    </div>
                    <div className={`nationalParkHikeDifficulty${hike.difficulty}`}> 
                        {hike.difficulty}
                    </div>
                </div>

                <div className='hikeShowSummary-Map'>
                    
                    <div className='hikeShowSummary-Attributes'> 
                        <div className='hikeShowSummary'>
                            Summary: {hike.summary}
                        </div>
                        
                        <div className='hikeShowAttributeTitles'> 

                            <div className='hikeShowLengthTitle'> 
                                Length:
                            </div>
                            <div className='hikeShowRoutetypeTitle'> 
                                Route Type:
                            </div>
                            <div className='hikeShowElevationGainTitle'> 
                                Elevation Gain:
                            </div>

                        </div>

                        <div className='hikeShowAttributes'>

                                <div className='hikeShowLength'>
                                    {hike.length}m
                                </div>
                                <div className='hikeShowRoutetype'>
                                    {hike.route_type}
                                </div>
                                <div className='hikeShowElevationGain'>
                                    {hike.elevation_gain}ft
                                </div>
                        </div>
                    </div>

                    <div className='hikeShowMap'>
                        <Map hike={hike} />
                    </div>

                </div>


                <div className='description-relevantHikes-reviews-photos'>
                           <div className='description-wrapper'> 
                                <div className='description-photo-reviews'>
                                    <div className='hikeShowDescription'>
                                        Description: {hike.description}
                                    </div>
                                    <div className='hikeShowReviewOrPhoto'>
                                        <div onClick={() => setReviewOrPhoto(0)} className='reviewSelector'
                                            style={reviewOrPhoto === 0 ? { color: '#428a13', borderBottom: '3px solid #428a13' } : null}>Reviews</div>
                                        <div onClick={() => setReviewOrPhoto(1)} className='photoSelector'
                                            style={reviewOrPhoto === 1 ? { color: '#428a13', borderBottom: '3px solid #428a13' } : null}>Photos</div>
                                    </div>
                                    <div className='reviewOrPhotoDiv'> 
                                        {ReviewOrPhoto()}
                                    </div>


                                </div>
                                <div className='hikeShowRelevantHikes'>
                                    <div className='nearbyHike'>
                                        Nearby Hikes:
                                    </div>
                                    {/* {console.log(hike.national_park)} */}
                                    {hike.national_park.map((nearHike, idx) => {
                                        if (nearHike.id != hike.id) {
                                            return (
                                                <div className='relevantHike' key={idx}>
                                                    <Link to={`/hike/${nearHike.id}`} className='relevantHikeLink'>
                                                        <img src={nearHike.photos[0].photoUrl} width='250px' height='200px' className='relevantHikePhoto' />
                                                        <div className='relevantHikeName'>{nearHike.name} </div>
                                                        <div className={`relevantHikeDifficulty${nearHike.difficulty}`}>{nearHike.difficulty}</div>
                                                        <div className='relevantHikeLength'>{nearHike.length}</div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                           </div>
                </div>

               
                    <div  id='pictureModal'>
                        <div className='pictureModalContents'>
                            <button onClick={() => setPhotoPreview({})} className='closeModalButton'>Close Preview</button>
                            <div></div>

                            <img src={photoPreview} className='pictureInModal' />
                        </div>
                    </div> 
            </div>
            
            : null}
        </div>
    ) 
}

export default HikeShow