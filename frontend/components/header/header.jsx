import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {

	constructor(props){
		super(props)
		this.loginCheck = this.loginCheck.bind(this)
		this.reIndex = this.reIndex.bind(this)
	}

	showSearch(){
		//Method to populate the search modal
	}

	logoutUser(currentText){
		if (currentText === "Logout"){
			this.props.logout();
		}
	}	

	loginCheck(e){
		if (this.props.currentUser){
			this.props.history.push("/projects/new")
		}else{
			this.props.history.push("/login")
		}
	}

	reIndex(){
		this.props.fetchProjects()
			.then(this.props.history.push("/projects"))
	}

	render(){
		let text;
		let action;
		if (this.props.currentUser){
			text = "Logout"
			action = '/signup'
		} else {
			text = "Log In"
			action = '/login'
		}
		return (
			<header className="header">
				<div id="left-nav">
					<a id="header-links" onClick={this.reIndex}>Discover </a>
					<a id="header-links" onClick={e => this.loginCheck(e)} >Start a Project</a>
				</div>
				<Link id='logo-click' to='/'><img id='startoff-logo' src={window.logoURL}></img></Link>
				<div id="right-nav">
					<NavLink id="header-links" to="#" onClick={this.showSearch()}>Search <FontAwesomeIcon icon={faSearch}/></NavLink>
					<NavLink id="header-links" to={action} onClick={e => this.logoutUser(text)}>{text}</NavLink>
				</div>

			</header>
		)
	}


}

export default withRouter(Header);