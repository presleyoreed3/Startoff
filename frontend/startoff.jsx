import React from 'react'
import ReactDOM from 'react-dom'
import  Root  from './components/root'

import {fetchUsers} from './utils/user_api_util'

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById('root');
	// const store = configureStore()
	//Testing
	window.fetchUsers = fetchUsers
	//Testing

	ReactDOM.render(<Root />, root)
})