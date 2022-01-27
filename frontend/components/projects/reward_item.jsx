import React from 'react'

class RewardItem extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="reward-tile">
				<h2>{this.props.reward.tierName}</h2>
				<h3>{this.props.reward.reward}</h3>
			</div>
		)
	}

}

export default RewardItem