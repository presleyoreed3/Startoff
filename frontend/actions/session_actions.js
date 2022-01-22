import * as ApiUtils from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser 
})

const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
	type: RECEIVE_CURRENT_USER,
	user
})

export const login = user => dispatch => {
	return ApiUtils.login(user)
		.then(user => {
			dispatch(receiveCurrentUser(user))
		}, error => {
			dispatch(receiveErrors(error.responseJSON))
		});
}

export const logout = () => dispatch => {
	return ApiUtils.logout()
		.then(() => {
			dispatch(logoutCurrentUser())
		}, error => {
			dispatch(receiveErrors(error.responseJSON))
		});
}

export const signup = user => dispatch => {
	return ApiUtils.signup(user)
		.then((user) => {
			dispatch(receiveCurrentUser(user))
		}, error => {
			dispatch(receiveErrors(error.responseJSON))
		})
}