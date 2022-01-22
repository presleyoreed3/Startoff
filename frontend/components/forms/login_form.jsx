import React from 'react'
import {Link} from 'react-router-dom'

class LoginForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
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
			<div id="login-form">
				<h2>Log In</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Email: 
						<input 
							value={this.state.email}
							type="text"
							onChange={this.update('email')}
						/>
					</label>
					<br />
					<label>Password: 
						<input 
							value={this.state.password}
							type="password"
							onChange={this.update('password')}
						/>
					</label>
					<br />
					<button type="submit">Log In</button>
				</form>
				<Link to="/signup"><button>Sign Up</button></Link>
			</div>
		)

	}

}

export default LoginForm