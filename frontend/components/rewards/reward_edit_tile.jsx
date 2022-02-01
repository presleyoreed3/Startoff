import React from 'react'

class EditRewardTile extends React.Component{

	constructor(props){
		super(props)
		this.state = this.props.reward
		this.update = this.update.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.action(this.state)
			.then(() => this.props.history.push(`/projects/${this.props.reward.projectId}`))
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
							value={this.state.tierName}
						/>
					</label>
					<label>Reward
						<input
							type="text"
							onChange={this.update('reward')}
							value={this.state.reward}
						/>
					</label>
					<label>Description
						<textarea
							type="text"
							onChange={this.update('rewardDescription')}
							value={this.state.rewardDescription}
						/>
					</label>
					<label>Price ($)
						<input
							type="text"
							onChange={this.update('price')}
							value={this.state.price}
						/>
					</label>
					<button>Update Reward</button>
				</form>
			</div>
		)
	}

}

export default EditRewardTile