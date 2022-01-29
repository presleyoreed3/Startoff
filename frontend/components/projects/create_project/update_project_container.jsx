import React from 'react'
import {connect} from 'react-redux'
import ProjectForm from './project_form'
import { fetchProject, updateProject } from '../../../actions/project_action'

const mapStateToProps = (state, ownProps) => ({
	project: state.entities.projects[ownProps.match.params.projectId],
	formType: "Update Project",
})

const mapDispatchToProps = dispatch => ({
	action: project => dispatch(updateProject(project)),
	fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)