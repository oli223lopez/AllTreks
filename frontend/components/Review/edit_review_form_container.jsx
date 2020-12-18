import React from 'react'
import {connect} from 'react-redux'
import { updateReview, receiveReview} from '../../actions/review_actions'
import ReviewForm from './review_form'
import { showHikeThunk } from '../../actions/hike_actions'


class EditReportForm extends React.Component {

    componentDidMount() {
        this.props.receiveReview(this.props.reviewId)
    }

    render() {
        const { formType, processForm, review } = this.props;

        if (!report) return null;
        return (
            <ReviewForm
                formType={formType}
                processForm={processForm}
                review={review} />
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    let hikeDB = {}
    // console.log(`${ownProps.match.params.hikeName}1`)
    if (state.entities.hikes[`${ownProps.match.params.hikeName}1`] != undefined) {
        hikeDB = state.entities.hikes[`${ownProps.match.params.hikeName}1`]
    }
    let review = {}
    // console.log(`${ownProps.match.params.hikeName}1`)
    if (state.entities.review[ownProps.match.params.reviewId] != undefined) {
        review = state.entities.review[ownProps.match.params.reviewId]
    }
    return{
    hikeDB: hikeDB,
    hikeName: ownProps.match.params.hikeName,
    reviewId: ownProps.match.params.reviewId,
    review: review,
    formType: 'Edit Review',
    errors: state.errors.review,

    }

}

const mapDispatchToProps = (dispatch) => ({
    processForm: (reviewId) => dispatch(updateReview(reviewId)),
    receiveReview: (reviewId) => dispatch(receiveReview(reviewId)),
    showHikeThunk: (hikeName) => dispatch(showHikeThunk(hikeName))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)