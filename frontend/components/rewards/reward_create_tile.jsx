import React from 'react'

class RewardCreateTile extends React.Component{

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.action(this.state)
	}

	render(){
		return(
			<div>
				<form id="form" onSubmit={this.handleSubmit}>
				<h3>Reward {this.props.rewardNum}</h3>
					<label>Reward Name
						<input
							type="text"
							onChange={this.update('tierName')}
						/>
					</label>
					<label>Reward
						<input
							type="text"
							onChange={this.update('reward')}
						/>
					</label>
					<label>Description
						<textarea
							type="text"
							onChange={this.update('description')}
						/>
					</label>
					<label>Price ($)
						<input
							type="text"
							onChange={this.update('price')}
						/>
					</label>
				</form>
			</div>
		)
	}

}

export default RewardCreateTile