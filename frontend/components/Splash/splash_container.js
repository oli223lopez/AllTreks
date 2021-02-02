import React from 'react'
import {connect} from 'react-redux'
import {fetchAllNP} from '../../actions/national_park_actions'
import Splash from './splash'



const mapStateToProps = (state) =>({
    allNationalParks: state.entities.nationalPark


})


const mapDispatchToProps = dispatch => ({
    fetchAllNP: () => dispatch(fetchAllNP())
})



export default connect(mapStateToProps, mapDispatchToProps)(Splash)