import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'


class RewardItem extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			errors: ""
		}
		this.handleClick = this.handleClick.bind(this)
		this.clearErrors = this.clearErrors.bind(this)
		this.editReward = this.editReward.bind(this)
	}

	handleClick(e){
		if (!this.props.currentUser){
			this.setState({errors: this.renderErrors()})
			setTimeout(this.clearErrors, 3000)
		}else{
			//Add ability to increment the total funding count
			//Also have the association that you are backing the project
		}
		
	}

	clearErrors(){
		let empty = ""
		this.setState({errors: empty})
	}

	renderErrors(){
		return (<p id="errors">Must be logged in to pledge</p>)
	}

	editReward(){
		if (!this.props.currentUser) return null;
		if (this.props.currentUser.id === this.props.project.creatorId){
			return(
				<div id="edit-button">
					<Link to={`/projects/${this.props.project.id}/rewards/update/${this.props.reward.id}`}>Edit Reward</Link>
				</div>
			)
		}
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
					<button onClick={e => this.handleClick(e)}>Pledge ${this.props.reward.price}</button>
					{this.state.errors}
				</div>
				{this.editReward()}
			</div>
		)
	}

}

export default RewardItem


