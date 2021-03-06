import React from 'react'
import ProjectsIndexItem from '../projects/index_project/project_index_item'

class Category extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			errors: []
		}
	}

	componentDidMount(){
		this.setState({errors: []})
		this.props.fetchProjectByCategory(this.props.match.params.categoryName)
			.fail(() => this.setState({errors: this.props.errors}))
	}

	render(){
		if (!this.props.filteredProjects) return null;
		return(
			<div className="project-index">
				<div id="project-counter">
					<h1>Explore <span id="count">{this.props.filteredProjects.length} Projects</span></h1>
				</div>
				<div id="projects-index">
					{this.props.filteredProjects.map(project => (
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

export default Category