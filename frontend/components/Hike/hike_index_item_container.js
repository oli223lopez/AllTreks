import {connect} from 'react-redux'
import HikeIndexItem from './hike_index_item'
import { receiveTrek, receiveHikeAPI, showHikeThunk} from '../../actions/hike_actions'


const mapStateToProps = (state, ownProps) => {
    let hikeAPI = {}
    if (state.entities.hikes[ownProps.match.params.hikeName.split("_").join(" ")] != undefined){
        hikeAPI = state.entities.hikes[ownProps.match.params.hikeName.split("_").join(" ")]
    }
    let hikeDB = {}
    // console.log(`${ownProps.match.params.hikeName}1`)
    if (state.entities.hikes[`${ownProps.match.params.hikeName}1`] != undefined){
        hikeDB = state.entities.hikes[`${ ownProps.match.params.hikeName }1`]
    }
    return ({hikeAPI: hikeAPI,
        hikeDB: hikeDB,
    hikeName: ownProps.match.params.hikeName}) 
};

const mapDispatchToProps = dispatch => ({
    receiveTrek: trekAPIId => dispatch(receiveTrek(trekAPIId)),
    receiveHikeAPI: hikeName => dispatch(receiveHikeAPI(hikeName)),
    showHikeThunk: hikeName => dispatch(showHikeThunk(hikeName))

})


export default connect(mapStateToProps, mapDispatchToProps)(HikeIndexItem)
