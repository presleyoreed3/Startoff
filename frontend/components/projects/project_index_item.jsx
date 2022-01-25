import React from 'react'
import {Link} from 'react-router-dom'

class ProjectsIndexItem extends React.Component {

	render(){
		return(
			<div id="project-div">
				<h2>{this.props.project.project_name}</h2>
				<img src={this.props.project.photoUrl}></img>
				<p>{this.props.project.description}</p>
			</div>
		)
	}

}

export default ProjectsIndexItem