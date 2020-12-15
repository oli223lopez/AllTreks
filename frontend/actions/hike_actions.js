import * as HikeAPIUtil from '../util/hike_api_util'

export const RECEIVE_HIKE = 'RECEIVE_HIKE'  
export const RECEIVE_ALL_TREKS = 'RECIEVE_ALL_TREKS'



// actions creator

export const fetchTrek = hike_API_id => ({
    type: RECEIVE_HIKE,
    hike_API_id
})

export const fetchAllTreks = treks => ({
    type: RECEIVE_ALL_TREKS,
    treks
})


//thunk action creators

export const receiveTrek = dispatch => {
    return HikeAPIUtil.fetchTrek().then(trek => dispatch(fetchTrek(trek)))
}

export const receiveTreks = nationalPark => dispatch => {
    return HikeAPIUtil.fetchNationalPark(nationalPark).then(treks => dispatch(fetchAllTreks(treks)))
}
