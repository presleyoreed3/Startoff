import React from 'react'
import { connect } from 'react-redux';
import ProjectsIndex from './projects_index'
import { fetchProjects } from '../../actions/project_action'

const mapStateToProps = state => ({
	projects: Object.values(state.entities.projects)
})

const mapDispatchToProps = dispatch => ({
	fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex)