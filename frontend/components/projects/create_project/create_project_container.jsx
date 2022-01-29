import React from 'react'
import {connect} from 'react-redux'
import ProjectForm from './project_form'
import { createProject } from '../../../actions/project_action'

const mapStateToProps = state => ({
	project: {
		projectName: '',
		creator_id: `${state.session.currentUser}`,
		description: '',
		category: '',
		goalAmount: '',
		deadline: '',
		photoFile: null,
	},
	formType: "Create Project",
})

const mapDispatchToProps = dispatch => ({
	action: project => dispatch(createProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)