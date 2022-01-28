import React from 'react'

class RewardItem extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="reward-tile" className={this.props.className}>
				<div id="reward-info">
					<div>
						<h4>Pledge <span>${this.props.reward.price}</span></h4>
						<h4 id="tier-name">{this.props.reward.tierName}</h4>
					</div>
					<div>
						<h5>{this.props.reward.reward}</h5>
						<p>{this.props.reward.rewardDescription}</p>
					</div>
				</div>
				<div id="pledge-dropdown">
					<button>Pledge ${this.props.reward.price}</button>
				</div>
			</div>
		)
	}

}

export default RewardItem