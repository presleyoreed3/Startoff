import React from 'react'
import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_action'
import ProjectShow from './project_show'

const mapStateToProps = (state, ownProps) => ({
	project: state.entities.projects[ownProps.match.params.projectId],
	currentUser: state.entities.users[state.session.currentUser],
	errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
	fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)