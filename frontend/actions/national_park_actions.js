import * as NationalParkAPI from '../util/national_park_api_util'



export const RECEIVE_NATIONAL_PARK = 'RECEIVE_NATIONAL_PARK'


// action creator
export const fetchNationalPark = nationalPark => ({
    type: RECEIVE_NATIONAL_PARK,
    nationalPark
})






// thunk action creator
export const receiveNationalPark = nationalParkId => dispatch => (

    NationalParkAPI.showNationalPark(nationalParkId).then(nationalPark => dispatch(fetchNationalPark(nationalPark)))
)



