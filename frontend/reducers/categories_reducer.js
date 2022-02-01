import { RECEIVE_PROJECTS } from '../actions/project_action'

const CategoriesReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch(action.type){
		case RECEIVE_PROJECTS:
			return Object.assign({}, oldState, action.projects.category)
		default:
			return oldState;
	}

}

export default CategoriesReducer