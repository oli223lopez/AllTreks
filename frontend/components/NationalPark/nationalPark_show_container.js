import { connect } from 'react-redux'
import NationalParkShow from './nationalPark_show'
import { receiveNationalPark} from '../../actions/national_park_actions'
import { receiveTreks } from '../../actions/hike_actions'



const mapStateToProps = (state, ownProps ) => { 
    // debugger
    // receiveNationalPark(ownProps.match.params.nationalParkId)
   return({ nationalParkId: ownProps.match.params.nationalParkId,
    nationalPark: state.entities.nationalPark[ownProps.match.params.nationalParkId]})
    
};

const mapDispatchToProps = dispatch => ({
    receiveNationalPark: nationalParkId => dispatch(receiveNationalPark(nationalParkId)),
    receiveTreks: nationalPark => dispatch(receiveTreks(nationalPark))
})


export default connect(mapStateToProps, mapDispatchToProps)(NationalParkShow)