import React from 'react'
import { connect } from 'react-redux'
import RewardForm from './rewards_form'
import { createReward } from '../../actions/reward_action'

const mapStateToProps = state => ({
	reward: {
		tierName: '',
		price: '',
		reward: '',
		rewardDescription: ''
	},
	formType: "Create Rewards"
})

const mapDispatchToProps = dispatch => ({
	action: reward => dispatch(createReward(reward))
})

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm)