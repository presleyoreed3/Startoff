import React from 'react'
import { connect } from 'react-redux'
import RewardForm from './rewards_form'
import {updateReward} from '../../actions/reward_action'

const mapStateToProps = (state, ownProps )=> ({

})

const mapDispatchToProps = dispatch => ({
	action: reward => dispatch(updateReward(reward))
})

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm)