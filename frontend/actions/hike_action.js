import * as HikeAPIUtil from '../util/hike_api_util'



export const RECEIVE_HIKE = 'RECEIVE_HIKE'
export const REMOVE_HIKE = 'REMOVE_HIKE'



export const receiveHike = hike => ({
    type: RECEIVE_HIKE,
    hike
})

export const clearHike = () => ({
    type: REMOVE_HIKE
})

export const fetchHike = (hike_id) => dispatch => {
    return HikeAPIUtil.fetchHike(hike_id)
    .then(hike => dispatch(receiveHike(hike)))
    // .catch(err => console.log(err))
}

export const removeHike = () => dispatch => {
    return dispatch(clearHike())
}
