import React from 'react'
import RewardItem from './reward_item'
import BackingWarning from './backing_warning'

class Rewards extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="rewards-div">
				<div id="rewards">
					<div id="rewards-header">
						<h3>Select your reward</h3>
						<p>Select an option below</p>
					</div>
					{this.props.rewards.map((reward, idx) => (
						<RewardItem 
							key={reward.id}
							reward={reward}
							className={idx}
						/>
					))}
				</div>
				{/*<BackingWarning />*/}
			</div>
		)
	}

}

export default Rewards