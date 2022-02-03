import React from 'react'
import {connect} from 'react-redux'
import {fetchProjectByCategory} from '../../actions/project_action'
import Category from './category'

const mapStateToProps = state => ({
	filteredProjects: Object.values(state.entities.projects)
})

const mapDispatchToProps = dispatch => ({
	fetchProjectByCategory: categoryName => dispatch(fetchProjectByCategory(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)