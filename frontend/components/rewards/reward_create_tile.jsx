import React from 'react'

class RewardCreateTile extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			tierName: '',
			price: '',
			reward: '',
			rewardDescription: '',
			toggleFeedback: false,

		}
		this.feedback = this.feedback.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		console.log(this.props)
	}

	feedback(){
		if (this.state.toggleFeedback){
			return(<p>Reward saved</p>)
		} else {
			return(<button>Save</button>)
		}
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	handleSubmit(e){
		e.preventDefault()
		let reward = {
			project_id: this.props.projectId,
			tier_name: this.state.tierName,
			price: this.state.price,
			reward: this.state.reward,
			reward_description: this.state.rewardDescription,
		}
		this.props.action(reward)
			.then(() => this.setState({toggleFeedback: true}))
		
		
	}

	render(){
		return(
			<div id="reward-create">
				<form className={`reward-${this.props.rewardNum}`} id="form" onSubmit={this.handleSubmit}>
				<h3>Reward {this.props.rewardNum}</h3>
					<label>Reward Name
						<input
							type="text"
							onChange={this.update('tierName')}
							value={this.props.tierName}
						/>
					</label>
					<label>Reward
						<input
							type="text"
							onChange={this.update('reward')}
							value={this.props.reward}
						/>
					</label>
					<label>Description
						<textarea
							type="text"
							onChange={this.update('rewardDescription')}
							value={this.props.description}
						/>
					</label>
					<label>Price ($)
						<input
							type="text"
							onChange={this.update('price')}
							value={this.props.price}
						/>
					</label>
					{this.feedback()}
				</form>
			</div>
		)
	}

}

export default RewardCreateTile