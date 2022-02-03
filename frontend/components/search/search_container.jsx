import React from 'react'
import { connect } from 'react-redux'
import Search from './search'

const mapStateToProps = state => ({
	filteredProjects: Object.values(state.entities.projects)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)