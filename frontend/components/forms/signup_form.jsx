import React from 'react'
import {Link} from 'react-router-dom'

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

	renderErrors(){
		if (this.props.errors.length){
			return (this.props.errors.map((error, idx) => {
				return(<p key={idx}>{error}</p>)
			}))
		}
	}

	render(){
		return(
			<div id="signup-div">
				<form id="signup-form" onSubmit={this.handleSubmit}>
					<div id="login-question">
						Have an Account? <Link to="/login">Log in</Link>
					</div>
					<h2>Sign Up</h2>
					<label>
						<input 
							placeholder="Full Name"
							value={this.state.name}
							type="text"
							onChange={this.update('name')}
						/>
					</label>
					<br></br>
					<label>
						<input 
							placeholder="Email"
							value={this.state.email}
							type="text"
							onChange={this.update('email')}
						/>
					</label>
					<br></br>
					<label>
						<input 
							placeholder="Password"
							value={this.state.password}
							type="password"
							onChange={this.update('password')}
						/>
					</label>
					<br></br>
					<button type="submit">Sign Up</button>
					{this.renderErrors()}
				</form>
			</div>
		)

	}

}

export default SignupForm