import React from 'react'
import ReactDOM from 'react-dom'
import  Root  from './components/root'
import configureStore from './store/store'
//Testing
// import {fetchUsers, fetchUser} from './utils/user_api_util'
// import {fetchProjects} from './utils/project_api_util'
//Testing

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById('root');

	//Bootstrap the user
	let store;
	if (window.currentUser) {
	  const preloadedState = {
	    entities: {
	      users: { [window.currentUser.id]: window.currentUser }
	    },
	    session: { currentUser: window.currentUser.id }
	  };
	  store = configureStore(preloadedState);
	  delete window.currentUser;
	} else {
	  store = configureStore();
	}

	//Testing
	// window.getState = store.getState
	// window.dispatch = store.dispatch
	// window.fetchUsers = fetchUsers
	// window.fetchUser = fetchUser
	// window.fetchProjects = fetchProjects
	//Testing

	ReactDOM.render(<Root store={store}/>, root)
})