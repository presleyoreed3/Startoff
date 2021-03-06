import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const UsersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch(action.type){
		case RECEIVE_CURRENT_USER:
			return Object.assign({}, { [action.currentUser.id]: action.currentUser })
		default:
			return oldState;
	}
}

export default UsersReducer;