import * as NationalPark from '../util/national_park_api_util' 


export const RECEIVE_NP = 'RECEIVE_NP'
export const RECEIVE_ALL_NP = 'RECEIVE_ALL_NP'


export const receiveNP = national_park =>({
    type: RECEIVE_NP,
    national_park
})

export const receiveAllNP = (national_parks) => ({
    type: RECEIVE_ALL_NP,
    national_parks
})


export const fetchNP = (national_parkID) => dispatch => {
    return NationalPark.NationalPark(national_parkID)
    .then((national_park) => dispatch(receiveNP(national_park)))
    // .catch(err => console.log(err))
}

export const fetchAllNP = () => dispatch => {
    return NationalPark.allNP()
    .then(national_parks => dispatch(receiveAllNP(national_parks)))
    // .catch(err => console.log(err))
}
