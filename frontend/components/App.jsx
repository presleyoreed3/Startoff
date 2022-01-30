import React from 'react';
import {Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_util'
import { NavLink, Link, Switch} from 'react-router-dom'

import Header from './header/header_container'
import ProjectFormContainer from './projects/create_project/create_project_container'
import UpdateProjectFormContainer from './projects/create_project/update_project_container'
import LoginFormContainer from './forms/login_form_container'
import SignupFormContainer from './forms/signup_form_container'
import ProjectsIndexContainer from './projects/index_project/projects_index_container'
import ProjectShowContainer from './projects/show_project/project_show_container'
import SplashContainer from './splash/splash_container'
import Footer from './footer/footer'


const App = () => {
	return(
		<div className="root-div">
			<Header />
			<Switch>
				<ProtectedRoute path="/projects/new" component={ProjectFormContainer}/>
				<ProtectedRoute path="/projects/:projectId/edit" component={UpdateProjectFormContainer}/>
				<AuthRoute path="/login" component={LoginFormContainer}/>
				<AuthRoute path="/signup" component={SignupFormContainer}/>
				<Route path="/projects/:projectId" component={ProjectShowContainer}/>
				<Route path='/projects' component={ProjectsIndexContainer}/>
				<Route path='/' component={SplashContainer} />
			</Switch>
			<Footer />
		</div>	
	)
}

export default App;