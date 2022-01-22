import React from 'react'
import Link from 'react-router-dom'

class SignupForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e){
		e.preventDefault();
		const user = Object.assign({}, this.state)
		this.props.processForm(user);
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	render(){
		return(
			<div>
				<h2>Sign Up</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Full Name: 
						<input 
							value={this.state.name}
							type="text"
							onChange={this.update('name')}
						/>
					</label>
					<br></br>
					<label>Email: 
						<input 
							value={this.state.email}
							type="text"
							onChange={this.update('email')}
						/>
					</label>
					<br></br>
					<label>Password: 
						<input 
							value={this.state.password}
							type="password"
							onChange={this.update('password')}
						/>
					</label>
					<br></br>
					<button type="submit">Sign Up</button>
				</form>
			</div>
		)

	}

}

export default SignupForm