import React from 'react'
import {Link} from 'react-router-dom'
import ProjectWarning from './projects_warning'
import Rewards from './rewards'

class ProjectShow extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			errors: ''
		}
		this.calcPecentage = this.calcPecentage.bind(this)
		this.calcDays = this.calcDays.bind(this)
		this.startoff = this.startoff.bind(this)
		this.clearErrors = this.clearErrors.bind(this)
	}

	componentDidMount(){
  		window.scrollTo(0, 0);
		this.props.fetchProject(this.props.match.params.projectId)
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
			daysLeft = `${days}`
		}
		return daysLeft;
	}

	startoff(e){
		if (!this.props.currentUser){
			this.setState({errors: "You must be logged in to back a project"})
			setTimeout(this.clearErrors, 3000)
		} else{
			document.getElementById("rewards-div").scrollIntoView()
		}
	}

	clearErrors(){
		let empty = ""
		this.setState({errors: empty})
	}

	render(){
		if (!this.props.project) return null;
		let progressPercentage = `${this.calcPecentage()}%`
		let daysLeft = this.calcDays()
		return(
			<div id="project-show-div">
				<div id="project-header">
					<div id="project-name">	
						<h1>{this.props.project.projectName}</h1>
					</div>
					<div id='project-description'>
						<p>{this.props.project.description}</p>
					</div>
				</div>
				<div id="sub-show">
					<img src={this.props.project.photoUrl}/>
					<div id="funding-counter">
						<div id="progress-bar"><div id="progress" style={{width: progressPercentage}}></div></div>
						<div id="funding">
							<div id="dollar">${this.props.project.currentFunding}
								<p>pledged of the ${this.props.project.goalAmount} goal</p>
							</div>
							<div id="backer-count">

							</div>
							<div id="days-left">{daysLeft}
								<p> days to go</p>
							</div>
						</div>
						<button onClick={e => this.startoff(e)}>Startoff this project</button>
						<p id="errors">{this.state.errors}</p>
					</div>
				</div>
				<ProjectWarning />
				<Rewards 
					rewards={this.props.project.projectRewards}
					currentUser={this.props.currentUser}
				/>
			</div>
		)
	}

}

export default ProjectShow