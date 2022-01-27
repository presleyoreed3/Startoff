import * as ApiUtils from '../utils/project_api_util'

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

const receiveProjects = projects => ({
	type: RECEIVE_PROJECTS,
	projects
})

const receiveProject = project => ({
	type: RECEIVE_PROJECT,
	project 
})

export const fetchProjects = () => dispatch => {
	return (
		ApiUtils.fetchProjects()
			.then(projects => dispatch(receiveProjects(projects)))
	)
}

export const fetchProject = projectId => dispatch => (
	ApiUtils.fetchProject(projectId)
		.then(project => dispatch(receiveProject(project)))
)