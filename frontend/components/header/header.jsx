import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {

	constructor(props){
		super(props)
	}

	showSearch(){
		//Method to populate the search modal
	}

	logoutUser(currentText){
		if (currentText === "Logout"){
			this.props.logout();
		}
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
					<NavLink id="header-links" to="/projects">Discover </NavLink>
					<NavLink id="header-links" to="#">Start a Project</NavLink>
				</div>
				<Link id='logo-click' to='/projects'><img id='startoff-logo' src={window.logoURL}></img></Link>
				<div id="right-nav">
					<NavLink id="header-links" to="#" onClick={this.showSearch()}>Search <FontAwesomeIcon icon={faSearch}/></NavLink>
					<NavLink id="header-links" to={action} onClick={e => this.logoutUser(text)}>{text}</NavLink>
				</div>

			</header>
		)
	}


}

export default Header