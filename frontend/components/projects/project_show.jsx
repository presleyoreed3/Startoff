import React from 'react'
import {Link} from 'react-router-dom'

class ProjectShow extends React.Component{

	componentDidMount(){
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render(){
		return(
			<div id="project-show-div">
				<div>	

				</div>
			</div>
		)
	}

}

export default ProjectShow