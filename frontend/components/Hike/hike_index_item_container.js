import {connect} from 'react-redux'
import HikeIndexItem from './hike_index_item'
import { receiveTrek, receiveHikeAPI} from '../../actions/hike_actions'


const mapStateToProps = (state, ownProps) => {
    let hike = {}
    if (state.entities.hikes[ownProps.match.params.hikeName.split("_").join(" ")] != undefined){
        hike = state.entities.hikes[ownProps.match.params.hikeName.split("_").join(" ")]
    }
    return ({hike: hike,
    hikeName: ownProps.match.params.hikeName}) 
};

const mapDispatchToProps = dispatch => ({
    receiveTrek: trekAPIId => dispatch(receiveTrek(trekAPIId)),
    receiveHikeAPI: hikeName => dispatch(receiveHikeAPI(hikeName))

})


export default connect(mapStateToProps, mapDispatchToProps)(HikeIndexItem)
