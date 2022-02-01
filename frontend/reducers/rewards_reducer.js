import { RECEIVE_REWARDS, RECEIVE_REWARD } from '../actions/reward_action'

const RewardsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch (action.type){
		case RECEIVE_REWARDS:
			return action.rewards
		case RECEIVE_REWARD:
			return Object.assign({}, {[action.reward.id]: action.reward})
		default:
			return oldState;
	}
}

export default RewardsReducer