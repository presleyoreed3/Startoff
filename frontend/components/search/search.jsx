import React from 'react'
import ProjectsIndexItem from '../projects/index_project/project_index_item'

class Search extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			errors: []
		}
		this.renderErrors = this.renderErrors.bind(this)
	}

	componentDidMount(){
		this.setState({errors: []})
		this.props.searchProject(this.props.match.params.query)
			.fail(() => this.setState({errors: this.props.errors}))
	}

	componentDidUpdate(prevProps){
		if (this.props.match.params.query !== prevProps.match.params.query){
			this.setState({errors: []})
			this.props.searchProject(this.props.match.params.query)
				.fail(() => this.setState({errors: this.props.errors}))
		}
	}

	renderErrors(){
		if (this.state.errors.length){
			return (this.state.errors.map((error, idx) => {
				return(<p key={idx}>{error}</p>)
			}))
		}
	}

	render(){
		if (!this.props.filteredProjects) return null;
		return(
			<div className="project-index">
				<div id="project-counter">
					<h1>Explore <span id="count">{this.props.filteredProjects.length} Projects</span></h1>
				</div>
				<div id="projects-index">
					{this.renderErrors()}
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

export default Search