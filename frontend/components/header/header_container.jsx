import React from 'react'
import { connect } from 'react-redux';
import Header from './header'

const mapStateToProps = state => ({
	currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(Header)