import React from 'react';
import {Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_util'
import { NavLink, Link, Switch} from 'react-router-dom'

import Header from './header/header_container'
// Protected Routes
import ProjectFormContainer from './projects/create_project/create_project_container'
import UpdateProjectFormContainer from './projects/create_project/update_project_container'
import CreateRewardsContainer from './rewards/create_rewards_container'
import UpdateRewardsContainer from './rewards/update_rewards_container'
// Auth Routes
import LoginFormContainer from './forms/login_form_container'
import SignupFormContainer from './forms/signup_form_container'
// Noraml Routes
import ProjectCategoryContainer from './projects/index_project/project_cat_index_container'
import ProjectsIndexContainer from './projects/index_project/projects_index_container'
import SearchContainer from './search/search_container'
import ProjectShowContainer from './projects/show_project/project_show_container'
import SplashContainer from './splash/splash_container'
import Footer from './footer/footer_container'


const App = () => {
	return(
		<div className="root-div">
			<Header />
			<Switch>
				<ProtectedRoute path="/projects/new" component={ProjectFormContainer}/>
				<ProtectedRoute path="/projects/:projectId/edit" component={UpdateProjectFormContainer}/>
				<ProtectedRoute path="/projects/:projectId/rewards/new" component={CreateRewardsContainer}/>
				<ProtectedRoute path="/projects/:projectId/rewards/update/:rewardId" component={UpdateRewardsContainer}/>
				<AuthRoute path="/login" component={LoginFormContainer}/>
				<AuthRoute path="/signup" component={SignupFormContainer}/>
				<Route path="/projects/search/:query" component={SearchContainer}/>
				<Route path="/projects/:projectId" component={ProjectShowContainer}/>
				<Route path='/projects' component={ProjectsIndexContainer}/>
				<Route path='/' component={SplashContainer} />
			</Switch>
			<Footer />
		</div>	
	)
}

export default App;