import React from 'react'
import RewardItem from './reward_item'
import BackingWarning from '../backing_warning'

class Rewards extends React.Component {

	constructor(props){
		super(props)
		this.checkLogin = this.checkLogin.bind(this)
	}

	checkLogin(){
		if (!this.props.currentUser) return null;
		if (this.props.currentUser.id === this.props.project.creatorId){
			return(
				<button>Edit Rewards</button>
			)
		}
	}

	render(){
		return(
			<div id="rewards-div">
				<div id="rewards">
					<div id="rewards-header">
						<h3>Select your reward</h3>
						<p>Select an option below</p>
						{this.checkLogin()}
					</div>
					{this.props.rewards.map((reward, idx) => (
						<RewardItem 
							key={reward.id}
							reward={reward}
							index={idx}
							currentUser={this.props.currentUser}
						/>
					))}
				</div>
				<BackingWarning />
			</div>
		)
	}

}

export default Rewards