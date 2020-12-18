import { connect } from 'react-redux'
import { createReview } from '../../actions/review_actions'
import {showHikeThunk} from '../../actions/hike_actions'
import ReviewForm from './review_form'




const mapStateToProps = (state) => {
    let hikeDB = {}
   
   return {review: {
        description: '',
        rating: "",
        user_id: state.session.id 
        },
       errors: state.errors.review,
        form_type: 'Write Review'
    }

}


const mapDispatchToProps = dispatch => ({
    processForm: (review) => dispatch( createReview(review)),
    showHikeThunk: (hikeName) => dispatch(showHikeThunk(hikeName))

})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)