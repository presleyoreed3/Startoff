import React from 'react'
import {connect} from 'react-redux'
import ProjectForm from './project_form'
import { createProject, fetchProject } from '../../../actions/project_action'

const selectProjectId = state => {
	if (Object.values(state.entities.projects).length === 0){
		return null;
	} else {
		return Object.values(state.entities.projects)[0].id
	}
}

const mapStateToProps = state => ({
	project: {
		projectName: '',
		creatorId: `${state.session.currentUser}`,
		description: '',
		category: '',
		goalAmount: '',
		deadline: '',
		photoFile: null,
	},
	formType: "Create Project",
	projectId: selectProjectId(state)
})

const mapDispatchToProps = dispatch => ({
	action: project => dispatch(createProject(project)),
	fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)