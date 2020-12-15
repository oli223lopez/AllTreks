import {connect} from 'react-redux';
import HikeIndex from './hike_index'
import { receiveTreks } from '../../actions/hike_actions'


const mapStateToProps = (state) => {
 
        // console.log(state.entities.hikes)
        return ({
        hikes: state.entities.hikes})
    
}

const mapDispatchToProps = dispatch =>{
    // console.log(receiveTreks)
    return({receiveTreks: nationalPark => dispatch(receiveTreks(nationalPark))})
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeIndex)


