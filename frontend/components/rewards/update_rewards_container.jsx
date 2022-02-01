import React from 'react'
import { connect } from 'react-redux'
import EditRewardForm from './edit_reward_form'
import {updateReward, fetchReward } from '../../actions/reward_action'

const mapStateToProps = (state, ownProps)=> {
	return {
		reward: state.entities.rewards[ownProps.match.params.rewardId],
		rewardId: ownProps.match.params.rewardId
	}
}

const mapDispatchToProps = dispatch => ({
	action: reward => dispatch(updateReward(reward)),
	fetchReward: rewardId => dispatch(fetchReward(rewardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRewardForm)