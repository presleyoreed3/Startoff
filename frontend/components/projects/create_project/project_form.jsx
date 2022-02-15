import React, {Suspense} from 'react'
import RewardInputTile from './reward_input_tile'

class ProjectForm extends React.Component{

	constructor(props){
		super(props)
		this.state = this.props.project
		this.handleSubmit = this.handleSubmit.bind(this)
		this.formatDate = this.formatDate.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.showLoading = this.showLoading.bind(this)
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	formatDate(){
		let today = new Date()
		let dd = today.getDate()+1;
		let mm = today.getMonth()+1;
		let yyyy = today.getFullYear();
		if (dd<10){
			dd="0"+dd
		}
		if (mm<10){
			mm='0'+mm
		}
		today = yyyy+'-'+mm+'-'+dd;
		return today;
	}

	handleKeyDown(e) {
    	e.target.style.height = 'inherit';
    	e.target.style.height = `${e.target.scrollHeight}px`; 
  	}

	handleFile(e){
		this.setState({photoFile: e.currentTarget.files[0]})
	}

	showLoading(){
		let spinner = document.getElementById("spinner");
		spinner.style.display = "block"
		let opaque = document.getElementById("opaque")
		opaque.style.display = "block"
	}

	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation()
		const formData = new FormData();
		formData.append('project[project_name]', this.state.projectName)
		formData.append('project[description]', this.state.description)
		formData.append('project[goal_amount]', this.state.goalAmount)
		formData.append('project[deadline]', this.state.deadline)
		formData.append('project[category]', this.state.category)
		formData.append('project[photo]', this.state.photoFile)
		formData.append('project[creator_id]', this.state.creatorId)
		this.showLoading()
		this.props.action(formData)
			.then(() => this.props.history.push(`/projects/${this.props.projectId}`))
	}

	render(){
		return(
			<div id="project-form">
				<div id="spinner"></div>
				<div id="opaque"></div>
				<div id="form-type"><h2>{this.props.formType}</h2></div>
				<div id="form-container">
					<form id="form" onSubmit={e => this.handleSubmit(e)}>
						<label>Project Name<br />
							<input required
								placeholder="Project Name" 
								type="text" 
								onChange={this.update('projectName')}
								/>
						</label>
						<label>Description<br />
							<textarea required
								onKeyDown={this.handleKeyDown}
								placeholder="Brief Description" 
								onChange={this.update('description')} 
								/>
						</label>
						
						<label>Goal Amount<br />
							<input required
								placeholder="Goal Amount" 
								type="text" 
								onChange={this.update('goalAmount')}
								/>
						</label>
						<label>End Date<br />
							<input required
								type="date" 
								min={this.formatDate()} 
								onChange={this.update('deadline')}
								/>
						</label>
						<label>Category<br />
							<select onChange={this.update('category')}>
								<option defaultValue>Select a category:</option>
							    <option value="Arts">Arts</option>
							    <option value="Comics & Illustration">Comics & Illustration</option>
							    <option value="Design & Tech">Design & Tech</option>
							    <option value="Film">Film</option>
							    <option value="Food & Craft">Food & Craft</option>
							    <option value="Games">Games</option>
							    <option value="Music">Music</option>
							    <option value="Publishing">Publishing</option>
							</select>
						</label>
						<label>Upload a photo:
							<input type="file" onChange={this.handleFile.bind(this)}/>
						</label>
						<button>{this.props.formType}</button>

					</form>
				</div>
			</div>
		)
	}

}

export default ProjectForm