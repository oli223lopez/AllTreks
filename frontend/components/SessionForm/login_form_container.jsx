import { connect } from 'react-redux'
import { login, removeErrors } from '../../actions/session_actions'
import React from 'react'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'



const mapStateToProps = (state) => ({
    
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup"> Signup </Link>
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())

})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

