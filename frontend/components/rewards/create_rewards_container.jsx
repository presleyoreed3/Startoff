import React from 'react'
import { connect } from 'react-redux'
import RewardForm from './rewards_form'

const mapStateToProps = state => ({
	reward: {
		tier_name: '',
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