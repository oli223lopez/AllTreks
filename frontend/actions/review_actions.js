import * as ReviewAPI from '../util/review_api_util'


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_ERRORS = 'RECEIVE__ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
//action creators

export const fetchReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})


export const removeError = () => ({
    type: REMOVE_ERRORS,

})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
}) 





//thunk action creator 

export const receiveReview = reviewId => dispatch => {
    return ReviewAPI.fetchReview(reviewId).then(review => dispatch(fetchReview(review)))
}

export const createReview = review => dispatch => {
    return ReviewAPI.createReview(review).then(review => dispatch(fetchReview(review)), 
    err => dispatch(receiveErrors(err))
    )
}

export const updateReview = review => dispatch => {
    return ReviewAPI.updateReview(review).then(review => dispatch(fetchReview(review)),
        err => dispatch(receiveErrors(err))
    )
}

export const deleteReview = reviewId => dispatch => {
    return ReviewAPI.deleteReview(reviewId).then(reviewId => dispatch(removeReview(reviewId)))
}