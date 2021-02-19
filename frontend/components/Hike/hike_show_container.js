import React from 'react'
import {connect} from 'react-redux'
import HikeShow from './hike_show'
import {fetchHike, removeHike} from '../../actions/hike_action'
import {createPhoto, deletePhoto} from '../../actions/photo_actions'
import {updateReview, deleteReview} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) =>{   
    // console.log(state.entities.hike)  
    return {
    hike: state.entities.hike,
    hikeID: ownProps.match.params.id,
    userID: state.entities.users.id}

}

const mapDispatchToProps = (dispatch) => ({
    fetchHike: (hikeID) => dispatch(fetchHike(hikeID)),
    removeHike: () => dispatch(removeHike()),
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    deletePhoto: (photoID) => dispatch(deletePhoto(photoID)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewID) => dispatch(deleteReview(reviewID))
})

export default connect(mapStateToProps, mapDispatchToProps)(HikeShow)