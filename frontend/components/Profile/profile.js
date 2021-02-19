
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



const Profile = (props) => {


    useEffect(() => {
        props.getUser(props.username)
    }, [])




    return(
        <div>
            <div>
                {props.user.username}'s Profile
            </div>
            <div>
                Reviews:
                <div>
                    {props.user.reviews.map((review, idx) => {
                        return(
                            <div key={idx}> 
                                <div> 
                                    <Link to={`hike/${review.hike.name}`}> {review.hike.name}</Link>
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
                </div>
            </div>

            <div>
                Photos:
                <div>
                    {props.user.photos.map((photo, idx) => {
                        return(
                            <div key={idx}> 
                                <div> 
                                    <Link to={`hike/${photo.hike.name}`}> {photo.hike.name}</Link>
                                </div>
                                <div> 
                                    <img src={photo.photoUrl} width='250px'height='200px'/>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        
        </div>
    )

}


export default Profile