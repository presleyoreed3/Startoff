import React from 'react'
import { connect } from 'react-redux';
import LoginForm from './login_form'
import { login, signup } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
	errors: state.errors.session,
	formType: "login"
})

const mapDispatchToProps = (dispatch) => ({
	processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)