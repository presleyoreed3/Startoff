import React from 'react'
import {Link} from 'react-router-dom'

class ProjectsIndexItem extends React.Component {

	constructor(props){
		super(props)
		this.calcPecentage = this.calcPecentage.bind(this)
		this.calcDays = this.calcDays.bind(this)
	}

	calcPecentage(){
		let currentAmount = this.props.project.currentFunding;
		let goalAmount = this.props.project.goalAmount;
		return Math.floor((currentAmount/goalAmount) * 100);
	}

	calcDays(){
		const endDay = Date.parse(this.props.project.deadline);
		const currentDay = Date.now();
		let seconds = (endDay - currentDay)/1000;
		let hours = seconds/3600;
		let days = Math.floor(hours/24)
		let daysLeft;
		if (days < 1){
			daysLeft = "Campaign is over"
		}else{
			daysLeft = `${days} days to go`
		}
		return daysLeft;
	}

	handleFilter(categoryName){
		return e => this.props.getCategory(categoryName)
	}

	render(){
		let progressPercentage = `${this.calcPecentage()}%`
		let daysLeft = this.calcDays();
		return(
			<Link to={`/projects/${this.props.project.id}`} id="project-div">
				<div id="top-image">
					<img src={this.props.project.photoUrl}></img>
				</div>
				<div id="info">
					<div id="description">
						<h2>{this.props.project.projectName}</h2>
						<p>{this.props.project.description}</p>
					</div>
					<div id="creator">
						<p>by <span id="creator-name">{this.props.project.creator}</span></p>
					</div>
					<div id="progress-bar"><div id="progress" style={{width: progressPercentage}}></div></div>
					<div id="funding">
						<p id="dollar">${this.props.project.currentFunding} pledged</p>
						<p id="percentage">{this.calcPecentage()}% funded</p>
						<p id="days-left">{daysLeft}</p>
					</div>
					<div id="category">
						<p >{this.props.project.category}</p>
					</div>
				</div>
			</Link>	
		)
	}

}

export default ProjectsIndexItem