import React from 'react'
import {Link} from 'react-router-dom'

class ProjectsIndexItem extends React.Component {

	render(){
		return(
			<div id="project-div">
				<div id="top-image">
					<img src={this.props.project.photoUrl}></img>
				</div>
				<div id="description">
					<h2>{this.props.project.project_name}</h2>
					<p>{this.props.project.description}</p>
				</div>
				<div id="creator">
					<p>by <span id="creator-name">{this.props.project.creator}</span></p>
				</div>
			</div>	
		)
	}

}

export default ProjectsIndexItem