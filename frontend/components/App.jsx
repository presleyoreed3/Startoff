import React from 'react';
import {Route} from 'react-router-dom'
import {AuthRoute} from '../utils/route_util'
import { NavLink, Link, Switch} from 'react-router-dom'

import Header from './header/header_container'
import LoginFormContainer from './forms/login_form_container'
import SignupFormContainer from './forms/signup_form_container'
import ProjectsIndexContainer from './projects/projects_index_container'
import ProjectShowContainer from './projects/project_show_container'
import Footer from './footer/footer'


const App = () => {
	return(
		<div className="root-div">
			<Header />
			<Switch>
				<AuthRoute path="/login" component={LoginFormContainer}/>
				<AuthRoute path="/signup" component={SignupFormContainer}/>
				<Route path="/projects/:projectId" component={ProjectShowContainer}/>
				<Route path='/projects' component={ProjectsIndexContainer}/>
			</Switch>
			{/*<Footer />*/}
		</div>	
	)
}

export default App;