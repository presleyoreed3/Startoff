import React from 'react'
import { connect } from 'react-redux';
import Footer from './footer'
import {fetchProjectByCategory} from '../../actions/project_action'

const mapStateToProps = state => ({
	
})

const mapDispatchToProps = dispatch => ({
	fetchProjectByCategory: categoryName => dispatch(fetchProjectByCategory(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)