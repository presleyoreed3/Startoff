import * as ApiUtils from '../utils/project_api_util'

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveProjects = projects => ({
	type: RECEIVE_PROJECTS,
	projects
})

const receiveProject = project => ({
	type: RECEIVE_PROJECT,
	project 
})

const removeProject = projectId => ({
	type: REMOVE_PROJECT,
	projectId
})

const receiveErrors = errors => {
return {
	type: RECEIVE_ERRORS,
	errors
}}

export const fetchProjects = () => dispatch => (
	ApiUtils.fetchProjects()
		.then(projects => dispatch(receiveProjects(projects)))
)

export const fetchProject = projectId => dispatch => (
	ApiUtils.fetchProject(projectId)
		.then(project => dispatch(receiveProject(project)))
)

export const createProject = project => dispatch => (
	ApiUtils.createProject(project)
		.then(project => dispatch(receiveProject(project)))
)

export const updateProject = project => dispatch => (
	ApiUtils.updateProject(project)
		.then(project => dispatch(receiveProject(project)))
)

export const deleteProject = projectId => dispatch => (
	ApiUtils.deleteProject(projectId)
		.then(() => dispatch(removeProject(projectId)))
)

export const fetchProjectByCategory = categoryName => dispatch => {
	return ApiUtils.fetchByCategory(categoryName)
		.then(projects => {
			return dispatch(receiveProjects(projects))
		}, error => {
			dispatch(receiveErrors(error.responseJSON))
		});
}

export const searchForProject = query => dispatch => {
	return ApiUtils.searchProject(query)
		.then(projects => {
			return dispatch(receiveProjects(projects))
		}, error => {
			dispatch(receiveErrors(error.responseJSON))
		});
}

