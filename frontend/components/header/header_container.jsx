import React from 'react'
import { connect } from 'react-redux';
import Header from './header'
import {logout} from '../../actions/session_actions'
import {fetchProjects, searchForProject} from '../../actions/project_action'

const mapStateToProps = state => ({
	currentUser: state.entities.users[state.session.currentUser],
	projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchProjects: () => dispatch(fetchProjects()),
	searchProject: query => dispatch(searchForProject(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)