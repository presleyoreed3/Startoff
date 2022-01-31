import * as ApiUtils from '../utils/rewards_api_util'

export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD"

const receiveReward = reward => ({
	type: RECEIVE_REWARDS,
	reward
})

export const createReward = reward => dispatch => (
	ApiUtils.createReward(reward)
		.then(reward => dispatch(receiveReward(reward)))
)

