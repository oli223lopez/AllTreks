import {connect} from 'react-redux' 
import NationalPark from './national_park'
import {fetchNP} from '../../actions/national_park_actions'


const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.nationalPark)
    // console.log(ownProps.match.params.id)
    return {
        nationalPark: state.entities.nationalPark, 
        nationalParkID: ownProps.match.params.id
    }
}

const mapDispatchToProps = () => dispatch => ({
    fetchNP: (nationalParkID) => dispatch(fetchNP(nationalParkID))
})


export default connect(mapStateToProps, mapDispatchToProps)(NationalPark)



