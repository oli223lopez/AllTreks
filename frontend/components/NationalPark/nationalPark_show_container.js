import { connect } from 'react-redux'
import NationalParkShow from './nationalPark_show'
import { receiveNationalPark} from '../../actions/national_park_actions'
import { receiveTreks } from '../../actions/hike_actions'



const mapStateToProps = (state, ownProps ) => { 
    // debugger
    // receiveNationalPark(ownProps.match.params.nationalParkId)
   return({ nationalParkName: ownProps.match.params.nationalParkName,
    nationalPark: state.entities.nationalPark[ownProps.match.params.nationalParkName]})
    
};

const mapDispatchToProps = dispatch => ({
    receiveNationalPark: nationalParkName=> dispatch(receiveNationalPark(nationalParkName)),
    receiveTreks: nationalPark => dispatch(receiveTreks(nationalPark))
})


export default connect(mapStateToProps, mapDispatchToProps)(NationalParkShow)