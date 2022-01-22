import { RECEIVE_CURRENT_USER,
		LOGOUT_CURRENT_USER }
from '../actions/session_actions';

const _nullSession = {
	currentUser: null,
}

const SessionsReducer = (oldState = _nullSession, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch(action.type){
		case RECEIVE_CURRENT_USER:
			return Object.assign({}, {currentUser: action.currentUser.id})
		case LOGOUT_CURRENT_USER:
			return _nullSession;
		default: 
			return oldState;
	}
}

export default SessionsReducer;