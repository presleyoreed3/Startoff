import React from 'react'
import RewardItem from './reward_item'

class Rewards extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="rewards-div">
				{this.props.rewards.map(reward => (
					<RewardItem 
						key={reward.id}
						reward={reward}
					/>
				))}
			</div>
		)
	}

}

export default Rewards