import {connect} from 'react-redux'
import HikeIndexItem from './hike_index_item'
import {receiveTrek} from '../../actions/hike_actions'


const mapStateToProps = (state, ownProps) => ({

    hike: state.entities.hikes[ownProps.match.params.hikeId] 
});

const mapDispatchToProps = dispatch => ({
    receiveTrek: trek => dispatch(receiveTrek(trek))
})


export default connect(mapStateToProps, mapDispatchToProps)(HikeIndexItem)
