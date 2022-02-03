import React from 'react'
import {Link} from 'react-router-dom'
import ProjectsIndexItem from './project_index_item'

class ProjectsIndex extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentDidMount(){
		this.props.fetchProjects()
	}

	render(){
		if (!this.props.projects) return null;
		return(
			<div className="project-index">
				<div id="spinner"></div>
				<div id="project-counter">
					<h1>Explore <span id="count">{this.props.projects.length} Projects</span></h1>
				</div>
				<div id="projects-index">
					{this.props.projects.map(project => (
						<ProjectsIndexItem
							project={project}
							key={project.id}
							getCategory={this.props.fetchProjectByCategory}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default ProjectsIndex