import React, {useState, useEffect} from 'react'
import Map from '../Map/map'
import ReviewFormContainer from '../Review/review_form_container'

const HikeShow = (props) => {
    const [hike, setHike] = useState({})
    const [photo, setPhoto] = useState({})
    const [photoFile, setPhotoFile] = useState({})
    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        props.fetchHike(props.hikeID).then(res => setHike(res.hike))
        // console.log(props.userID)
    }, [])

    
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

    return(
        <div>
            {Object.values(hike).length ? 
            <div>
                <div>
                    {hike.photos.map((photo, i) => {
                        return(
                            <img key={i} src={photo.photoUrl} width='500px' height='500px' />
                        )
                    })}
                </div>
                <div> 
                    {hike.name}
                </div>
                <div> 
                    Length: {hike.length}
                </div>
                <div> 
                    Route Type: {hike.route_type}
                </div>
                <div> 
                    Elevation Gain: {hike.elevation_gain}
                </div>
                <div> 
                    Summary: {hike.summary}
                </div>
                <div> 
                    Description: {hike.description}
                </div>
              

                <form onSubmit = {() => setPhoto({picture: photoFile})}>
                    <input type='file' onChange={((e) => setPhotoFile(e.currentTarget.files[0]))}/>
                    <button type='submit'>Submit</button>
                </form>
                {photoUrl ? <div>
                                <img src={photoUrl}/>
                            </div> 
                            : null}
                <div id='app'> 
                </div>
                <ReviewFormContainer hikeID={props.hikeID} userID={props.userID}/>

                {hike.reviews.map((review, idx) => {
                    return(
                        <div key={idx}>
                            {console.log(review)}
                            <div> 
                                {review.user.username}
                            </div>
                            <div>
                                {review.rating}
                            </div>
                            <div> 
                                {review.description}
                            </div>
                        </div>
                    )
                })}

                <Map hike={hike}/>
            </div>
            
            : null}
        </div>
    )
}

export default HikeShow