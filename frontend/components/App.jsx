import React from 'react';
import {Route} from 'react-router-dom'
import {AuthRoute} from '../utils/route_util'
import { NavLink, Link } from 'react-router-dom'

import LoginFormContainer from './forms/login_form_container'
import SignupFormContainer from './forms/signup_form_container'


const App = () => (
	<div>
		<header>
			<h1>Startoff</h1>
			<NavLink to="/login" >Log In</NavLink>
		</header>

		<AuthRoute path="/login" component={LoginFormContainer}/>
		<AuthRoute path="/signup" component={SignupFormContainer}/>
	</div>	
)

export default App;