import {connect} from 'react-redux'
import React from 'react'
import Rewards from './rewards'

const mapStateToProps = (state) => ({
	errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)