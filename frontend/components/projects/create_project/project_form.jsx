import React from 'react'

class ProjectForm extends React.Component{

	constructor(props){
		super(props)
		this.state = this.props.project
		this.handleSubmit = this.handleSubmit.bind(this)
		this.formatDate = this.formatDate.bind(this)
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

	handleFile(e){
		this.setState({photoFile: e.currentTarget.files[0]})
	}

	handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append('project[project_name]', this.state.projectName)
		formData.append('project[description]', this.state.description)
		formData.append('project[goal_amount]', this.state.goalAmount)
		formData.append('project[deadline]', this.state.deadline)
		formData.append('project[category]', this.state.category)
		formData.append('project[photo]', this.state.photoFile)
		this.props.action(formData)
	}

	render(){
		console.log(this.state)
		return(
			<div id="project-form">
				<div id="form-type"><h2>{this.props.formType}</h2></div>
				<div id="form-container">
					<form id="form" onSubmit={this.handleSubmit}>
						<label>Project Name<br />
							<input 
								placeholder="Project Name" 
								type="text" 
								onChange={this.update('projectName')}
								value={this.state.projectName}/>
						</label>
						<label>Description<br />
							<textarea 
								placeholder="Brief Description" 
								onChange={this.update('description')} 
								value={this.state.description}/>
						</label>
						
						<label>Goal Amount<br />
							<input 
								placeholder="Goal Amount" 
								type="text" 
								onChange={this.update('goalAmount')}
								value={this.state.goalAmount}/>
						</label>
						<label>End Date<br />
							<input 
								type="date" 
								min={this.formatDate()} 
								onChange={this.update('deadline')}
								value={this.state.deadline}/>
						</label>
						<label>Category<br />
							<select onChange={this.update('category')}>
								<option disabled default >Select a category:</option>
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
							<input type="file" onChange={this.handleFile.bind(this)} />
						</label>
						<button type="submit" value={this.props.formType}>{this.props.formType}</button>
					</form>
				</div>
			</div>
		)
	}

}

export default ProjectForm