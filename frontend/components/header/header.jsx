import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';

class Header extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props)
		let text;
		if (this.props.currentUser){
			text = "Logout"
		} else {
			text = "Log In"
		}
		return (
			<header>
				<div id="left-nav">
					<NavLink id="header-links" to="#">Discover </NavLink>
					<NavLink id="header-links" to="#">Start a Project</NavLink>
				</div>
				<Link id='logo-click' to='/login'><img id='startoff-logo' src={logo}></img></Link>
				<div id="right-nav">
					<NavLink id="header-links" to="/login">{text}</NavLink>
				</div>
			</header>
		)
	}


}

export default Header