import * as HikeAPIUtil from '../util/hike_api_util'

export const RECEIVE_HIKE = 'RECEIVE_HIKE'  
export const RECEIVE_ALL_TREKS = 'RECIEVE_ALL_TREKS'
export const SHOW_HIKE = "SHOW_HIKE"
export const RECEIVE_HIKE_FROM_API = "RECEIVE_HIKE_FROM_API"



// actions creator

export const fetchTrek = hike => ({
    type: RECEIVE_HIKE,
    hike
})

export const fetchAllTreks = treks => ({
    type: RECEIVE_ALL_TREKS,
    treks
})

export const showHike = hike => ({
    type: SHOW_HIKE,
    hike
})

export const receiveHikeFromAPI = hike => ({
    type: RECEIVE_HIKE_FROM_API,
    hike
})


//thunk action creators

export const receiveTrek = trekAPIId => dispatch => {
    return HikeAPIUtil.fetchTrek(trekAPIId).then(trek => dispatch(fetchTrek(trek)))
}

export const receiveTreks = nationalPark => dispatch => {
    return HikeAPIUtil.fetchNationalPark(nationalPark).then(treks => dispatch(fetchAllTreks(treks)))
}

export const showHikeThunk = hikeName => dispatch => {
    return HikeAPIUtil.showHikeTrail(hikeName).then(hike => dispatch(showHike(hike)))
}


export const receiveHikeAPI = hikeName => dispatch => {
    return HikeAPIUtil.showHikeTrail(hikeName)
    .then(hike => HikeAPIUtil.fetchTrek(hike.hike_API_id))
    .then(hike => dispatch(receiveHikeFromAPI(hike)))
}

