import { RECEIVE_PROJECTS, RECEIVE_ERRORS } from '../actions/project_action';

const sessionErrorsReducer = (oldState = [], action) => {
	Object.freeze(oldState);
	switch(action.type){
		case RECEIVE_PROJECTS:
			return [];
		case RECEIVE_ERRORS:
			return action.errors;
		default:
			return oldState;
	}
}

export default sessionErrorsReducer;