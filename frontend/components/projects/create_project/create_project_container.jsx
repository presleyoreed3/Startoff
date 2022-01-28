import React from 'react'
import {connect} from 'react-redux'
import ProjectForm from './project_form'
import { createProject } from '../../../actions/project_action'

const mapStateToProps = state => ({
	project: {
		projectName: '',
		description: '',
		category: '',
		goal_amout: '',
		deadline: ''
	},
	formType: "Create Project"
})

const mapDispatchToProps = dispatch => ({
	action: project => dispatch(createProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)