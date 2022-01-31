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
			</div>
		)
	}

}

export default RewardForm