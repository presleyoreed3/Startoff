import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_action'

const ProjectsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch(action.type){
		case RECEIVE_PROJECTS:
			return Object.assign({}, oldState, action.projects)
		case RECEIVE_PROJECT:
			return Object.assign({}, oldState, {[action.project.id]: action.project})
		default:
			return oldState;
	}

}

export default ProjectsReducer