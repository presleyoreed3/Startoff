import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			search: ''
		}
		this.loginCheck = this.loginCheck.bind(this)
		this.reIndex = this.reIndex.bind(this)
		this.showSearch = this.showSearch.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.update = this.update.bind(this)
	}

	showSearch(){
		let search = document.getElementById("search-input");
		search.id = "search-input-revealed"
		let searchButton = document.getElementById("search-submit");
		searchButton.id = "search-button-revealed"
		let ogButton = document.getElementsByClassName("search");
		ogButton[0].style.display = "none"
		let div = document.getElementById("right-nav")
		div.style.margin = "20px"
	}

	handleSearch(e){
		this.props.searchProject(this.state.search)
			.then(this.props.history.push("/projects/search/"))
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
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
					<input id="search-input" onChange={this.update('search')} type="text" name="search" placeholder="Search..."/>
					<button id="search-submit" type="submit" onClick={(e) => this.handleSearch(e)}><FontAwesomeIcon icon={faSearch}/></button>
					<a className="search" id="header-links" onClick={this.showSearch}>Search <FontAwesomeIcon icon={faSearch}/></a>
					<NavLink id="header-links" to={action} onClick={e => this.logoutUser(text)}>{text}</NavLink>
				</div>
			</header>
		)
	}
}

export default withRouter(Header);


