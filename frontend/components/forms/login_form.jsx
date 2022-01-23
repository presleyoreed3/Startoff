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

	signInDemo(){
		const demoObject = {
			email: 'demo@startoff.com',
			password: 'demo-user'
		}
		const user = Object.assign({}, this.state, demoObject)
		this.props.processForm(user)
	}

	render(){
		return(
			<div id="login-div">
				<form id="login-form" onSubmit={this.handleSubmit}>
					<h2>Log In</h2>
					<label>
						<input
							placeholder="Email"
							value={this.state.email}
							type="text"
							onChange={this.update('email')}
							required
						/>
					</label>
					<br />
					<label>
						<input 
							placeholder="Password"
							value={this.state.password}
							type="password"
							onChange={this.update('password')}
							required
						/>
					</label>
					<br />
					<button type="submit">Log In</button>
					<div id="signup-question">
						<p>New to Startoff? <Link to="/signup">Sign up</Link></p>
					</div>
					<div id="demo-user">
						<p onClick={() => this.signInDemo()}>Demo User</p>
					</div>
				</form>
			</div>
		)

	}

}

export default LoginForm