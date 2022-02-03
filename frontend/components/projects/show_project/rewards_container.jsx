import {connect} from 'react-redux'
import React from 'react'
import Rewards from './rewards'
import {updateProject} from '../../actions/project_action'

const mapStateToProps = (state) => ({
	errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
	updateProject: project => dispatch(updateProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)