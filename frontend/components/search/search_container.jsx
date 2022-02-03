import React from 'react'
import { connect } from 'react-redux'
import Search from './search'
import {searchForProject} from '../../actions/project_action'

const mapStateToProps = state => ({
	filteredProjects: Object.values(state.entities.projects),
	errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
	searchProject: query => dispatch(searchForProject(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)