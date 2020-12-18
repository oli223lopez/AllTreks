import { connect } from 'react-redux'
import { signup, removeErrors} from '../../actions/session_actions'
import React from 'react'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'





const mapStateToProps = state => {
    // console.log(`maps state to props ${JSON.stringify(state.errors)}`)
    return {errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Login</Link>}
}

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)