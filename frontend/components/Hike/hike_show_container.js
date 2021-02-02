import React from 'react'
import {connect} from 'react-redux'
import HikeShow from './hike_show'
import {fetchHike, removeHike} from '../../actions/hike_action'

const mapStateToProps = (state, ownProps) =>{   
    // console.log(state.entities.hike)  
    return {
    hike: state.entities.hike,
    hikeID: ownProps.match.params.id}

}

const mapDispatchToProps = (dispatch) => ({
    fetchHike: (hikeID) => dispatch(fetchHike(hikeID)),
    removeHike: () => dispatch(removeHike())
})

export default connect(mapStateToProps, mapDispatchToProps)(HikeShow)