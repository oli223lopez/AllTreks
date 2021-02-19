import {connect} from 'react-redux'
import {createReview} from '../../actions/review_actions'
import ReviewForm from './review_form'
import { fetchHike} from '../../actions/hike_action'



const mapStateToProps = (state, ownProps) => {
    return {
    }
}


const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
    fetchHike: (hikeID) => dispatch(fetchHike(hikeID)),

    
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)


