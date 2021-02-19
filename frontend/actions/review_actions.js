import * as reviewAPI from '../util/review_api_util'


export const CREATE_REVIEW = 'CREATE_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'

export const postReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

export const patchReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

export const destroyReview = () => ({
    type: DELETE_REVIEW,
})

export const createReview = (review) => dispatch => {
    return reviewAPI.createReview(review)
    .then((review) => dispatch(postReview(review)))
}

export const updateReview = (review) => dispatch => {
    return reviewAPI.updateReview(review)
    .then(review => diaptch(patchReview(review)))
}

export const deleteReview = (reviewID) => dispatch => {
    return reviewAPI.deleteReview(reviewID)
    .then(review => dispatch(destroyReview(review)))
}

