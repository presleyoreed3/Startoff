import React from 'react'
import {Link} from 'react-router-dom'
import ProjectsIndexItem from './project_index_item'

class ProjectsIndex extends React.Component {

	componentDidMount(){
		console.log("making the api call")
		this.props.fetchProjects()
	}

	render(){
		return(
			<div id="projects-index">
				{this.props.projects.map(project => (
					<ProjectsIndexItem
						project={project}
						key={project.id}
					/>
				))}
			</div>
		)
	}
}

export default ProjectsIndex