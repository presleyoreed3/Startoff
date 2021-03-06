import React from 'react'
import {Link} from 'react-router-dom'
import RewardCreateTile from './reward_create_tile'

class RewardForm extends React.Component{

	constructor(props){
		super(props)
		this.state = this.props.reward
	}

	render(){
		return(
			<div id="tiers-container">
			<h3>{this.props.formType}</h3>
			<p>Each Startoff project has 4 reward tiers for someone to back. Please add the name of this reward, 
			what the backer will get from it, a description of the reward, and the cost to recieve this reward.</p>
				<RewardCreateTile 
					action={this.props.action}
					projectId={this.props.match.params.projectId}
					formType={this.props.formType}
					rewardNum="1"
				/>
				<RewardCreateTile 
					action={this.props.action}
					projectId={this.props.match.params.projectId}
					formType={this.props.formType}
					rewardNum="2"
				/>
				<RewardCreateTile 
					action={this.props.action}
					projectId={this.props.match.params.projectId}
					formType={this.props.formType}
					rewardNum="3"
				/>
				<RewardCreateTile 
					action={this.props.action}
					projectId={this.props.match.params.projectId}
					formType={this.props.formType}
					rewardNum="4"
				/>
				<button onClick={() => this.props.history.push(`/projects/${this.props.match.params.projectId}`)}>Done</button>
			</div>
		)
	}

}

export default RewardForm