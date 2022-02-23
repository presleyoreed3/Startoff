import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';
import {withRouter} from 'react-router'


class Footer extends React.Component {

	constructor(props){
		super(props)
	}


	handleFilter(categoryName){
		return e => this.props.fetchProjectByCategory(categoryName)
			.then(this.props.history.replace(`/projects/category/${categoryName}`))
	}

	render(){
		return(
			<footer>
				<div id='footer-category'>
					<p onClick={this.handleFilter("Arts")}>Arts</p>
					<p onClick={this.handleFilter("Comics & Illustration")}>Comics & Illustration</p>
					<p onClick={this.handleFilter("Design & Tech")}>Design & Tech</p>
					<p onClick={this.handleFilter("Film")}>Film</p>
					<p onClick={this.handleFilter("Food & Craft")}>Food & Craft</p>
					<p onClick={this.handleFilter("Games")}>Games</p>
					<p onClick={this.handleFilter("Music")}>Music</p>
					<p onClick={this.handleFilter("Publishing")}>Publishing</p>
				</div>
				<div id="footer-nav">
					<div id="footer-logo">
						<img src={window.logoURL} id="img-logo"></img>
						<p>&#169; Presley Reed III 2022</p>
					</div>
					
					<div id='footer-info'>
						<h3>About</h3>
						<a href="mailto:presleyoreed3@gmail.com?subject=Let's talk about a Job!" target="_blank">Email me</a>
						<a href="https://github.com/presleyoreed3" target="_blank">GitHub</a>
						<a href="https://www.linkedin.com/in/presleyoreed3/" target="_blank">LinkedIn</a>
						<a href="www.presleyoreed.com" target="_blank">Personal Site</a>
						<a href="https://angel.co/u/presley-reed-iii" target="_blank">AngelList</a>
					</div>

				</div>
			</footer>
		)
	}

}

export default withRouter(Footer)