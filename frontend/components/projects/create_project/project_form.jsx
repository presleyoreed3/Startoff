import React from 'react'

class ProjectForm extends React.Component{

	render(){
		return(
			<div id="project_form">
				<h1>{this.props.formType}</h1>
			</div>
		)
	}

}

export default ProjectForm