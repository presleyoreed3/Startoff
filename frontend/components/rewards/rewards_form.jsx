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
					formType={this.props.formType}
					rewardNum="1"
				/>
				<RewardCreateTile 
					formType={this.props.formType}
					rewardNum="2"
				/>
				<RewardCreateTile 
					formType={this.props.formType}
					rewardNum="3"
				/>
				<RewardCreateTile 
					formType={this.props.formType}
					rewardNum="4"
				/>
				<button>{this.props.formType}</button>
			</div>
		)
	}

}

export default RewardForm