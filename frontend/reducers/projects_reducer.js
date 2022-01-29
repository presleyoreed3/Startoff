import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_action'

const ProjectsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch(action.type){
		case RECEIVE_PROJECTS:
			return Object.assign({}, oldState, action.projects)
		case RECEIVE_PROJECT:
			return Object.assign({}, {[action.project.id]: action.project})
		case REMOVE_PROJECT:
			nextState[action.projectId]
			return nextState;
		default:
			return oldState;
	}

}

export default ProjectsReducer