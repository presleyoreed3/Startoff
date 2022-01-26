import React from 'react'
import {Link} from 'react-router-dom'

class ProjectsIndexItem extends React.Component {

	constructor(props){
		super(props)
		this.calcPecentage = this.calcPecentage.bind(this)
		this.calcDays = this.calcDays.bind(this)
	}

	calcPecentage(){
		let currentAmount = this.props.project.current_funding;
		let goalAmount = this.props.project.goal_amount;
		return Math.floor((currentAmount/goalAmount) * 100);
	}

	calcDays(){
		const endDay = Date.parse(this.props.project.deadline);
		const currentDay = Date.now();
		let seconds = (endDay - currentDay)/1000;
		let hours = seconds/3600;
		let days = hours/24
		return Math.floor(days);
	}

	render(){
		let progressPercentage = `${this.calcPecentage()}%`
		let overCheck = false;
		let daysLeft;
		if (this.calcDays() < 1){
			overCheck = true;
			daysLeft = "Campaign is over"
		}else{
			daysLeft = `${this.calcDays()} days to go`
		}

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
					<div id="progress-bar"><div id="progress" style={{width: progressPercentage}}></div></div>
					<div id="funding">
						<p id="dollar">${this.props.project.current_funding} pledged</p>
						<p id="percentage">{this.calcPecentage()}% funded</p>
						<p id="days-left">{daysLeft}</p>
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