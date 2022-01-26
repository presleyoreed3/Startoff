import React from 'react'
import {Link} from 'react-router-dom'

class ProjectShow extends React.Component{

	constructor(props){
		super(props)
		this.state = this.props.project
	}

	componentDidMount(){
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render(){
		if (!this.props.project) return null;
		return(
			<div id="project-show-div">
				<div id="project-info">	
					 <h1>{this.props.project.projectName}</h1>
					 <p>{this.props.project.description}</p>
				</div>
				<img src={this.props.project.photoUrl}/>
				<div id="funding-counter">
				
				</div>
			</div>
		)
	}

}

export default ProjectShow