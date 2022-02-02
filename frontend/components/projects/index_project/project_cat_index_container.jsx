import React from 'react'
import { connect } from 'react-redux';
import ProjectsIndex from './projects_index'
import { fetchProjects } from '../../../actions/project_action'

const mapStateToProps = (state, ownProps) => ({
	projects: state.entities.categories[ownProps.match.params.categoryName]
})

const mapDispatchToProps = dispatch => ({
	fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex)