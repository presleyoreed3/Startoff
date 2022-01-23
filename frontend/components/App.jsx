import React from 'react';
import {Route} from 'react-router-dom'
import {AuthRoute} from '../utils/route_util'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../app/assets/images/startoff-logo.png';
import LoginFormContainer from './forms/login_form_container'
import SignupFormContainer from './forms/signup_form_container'


const App = () => {
	return(
		<div>
			<header>
				<div id="left-nav">
					<NavLink to="#">Discover </NavLink>
					<NavLink to="#">Start a Project</NavLink>
				</div>
				<img id='startoff-logo' src={logo}></img>
				<NavLink id='right-nav' to="/login" >Log In</NavLink>
			</header>
	
			<AuthRoute path="/login" component={LoginFormContainer}/>
			<AuthRoute path="/signup" component={SignupFormContainer}/>
		</div>	
	)
}

export default App;