import {connect} from 'react-redux';
import HikeIndex from './hike_index'
import { showHikeThunk, receiveTreks, receiveTrek,  } from '../../actions/hike_actions'


const mapStateToProps = (state, ownProps) => {
 
        // console.log("container")
        return ({
        hikes: state.entities.hikes,
        })
    
}

const mapDispatchToProps = dispatch =>{
    // console.log(receiveTreks)
    return({receiveTreks: nationalPark => dispatch(receiveTreks(nationalPark)),
        receiveTrek: trek => dispatch(receiveTrek(trek)),
        showHikeThunk: hikeName => dispatch(showHikeThunk(hikeName)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HikeIndex)


