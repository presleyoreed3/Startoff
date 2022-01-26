import React from 'react'
import {Link} from 'react-router-dom'

class ProjectsIndexItem extends React.Component {

	constructor(props){
		super(props)
		this.calcPecentage = this.calcPecentage.bind(this)
	}

	calcPecentage(){
		let currentAmount = this.props.project.current_funding;
		let goalAmount = this.props.project.goal_amount;
		return Math.floor((currentAmount/goalAmount) * 100);
	}

	render(){
		return(
			<div id="project-div">
				<div id="top-image">
					<img src={this.props.project.photoUrl}></img>
				</div>
				<div id="info">
					<div id="description">
						<h2>{this.props.project.project_name}</h2>
						<p>{this.props.project.description}</p>
					</div>
					<div id="creator">
						<p>by <span id="creator-name">{this.props.project.creator}</span></p>
					</div>
					<div id="progress-bar"></div>
					<div id="funding">
						<p>${this.props.project.current_funding} pledged</p>
						<p>{this.calcPecentage()}% funded</p>
					</div>
					<div id="category">
						<p>{this.props.project.category}</p>
					</div>
				</div>
			</div>	
		)
	}

}

export default ProjectsIndexItem