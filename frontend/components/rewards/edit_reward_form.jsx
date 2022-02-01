import React from 'react'
import RewardEditTile from './reward_edit_tile'

class EditRewardForm extends React.Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.fetchReward(this.props.rewardId)
	}

	render(){
		if (!this.props.reward) return null;
		return(
			<div>
				<RewardEditTile
					reward={this.props.reward}
					action={this.props.action}
					history={this.props.history}
				/>
			</div>
		)
	}

}

export default EditRewardForm