import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import React from 'react'
import SessionForm from './session_form'
import { Link } from 'react-router-dom'





const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Login</Link>
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)