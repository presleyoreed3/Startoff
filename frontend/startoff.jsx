import React from 'react'
import ReactDOM from 'react-dom'
import  Root  from './components/root'
import configureStore from './store/store'
//Testing
import {fetchUsers, fetchUser} from './utils/user_api_util'
//Testing

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById('root');
	const store = configureStore()

	//Testing
	window.getState = store.getState
	window.dispatch = store.dispatch
	window.fetchUsers = fetchUsers
	window.fetchUser = fetchUser
	//Testing

	ReactDOM.render(<Root store={store}/>, root)
})