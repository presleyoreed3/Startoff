import React from 'react'
import {Link} from 'react-router-dom'

class SignupForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.renderConfirm = this.renderConfirm.bind(this)
	}

	handleSubmit(e){
		e.preventDefault();
		if (this.confirmPassword()){
			const user = Object.assign({}, this.state)
			this.props.processForm(user);
		} else {
			this.setState({errors: ["Your passwords did not match"]})
			this.renderErrors();
		}
		
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

	frontendErrors(){
		if (this.state.errors.length){
			return (this.state.errors.map((error, idx) => {
				return(<p key={idx}>{error}</p>)
			}))
		}
	}

	renderConfirm(){
		const confirm = document.getElementById("confirm-password")
		confirm.style.display = "block"
	}
	
	confirmPassword(){
		return this.state.password === this.state.passwordConfirm
	}

	render(){
		return(
			<div id="signup-div">
				<form id="signup-form" onSubmit={this.handleSubmit}>
					<div id="login-question">
						Have an Account? <Link to="/login">Log in</Link>
					</div>
					<h2>Sign Up</h2>
					<div id="validation">
						{this.renderErrors()}
						{this.frontendErrors()}
					</div>
					<input 
						placeholder="Full Name"
						value={this.state.name}
						type="text"
						onChange={this.update('name')}
					/>
					<br />
					<input 
						placeholder="Email"
						value={this.state.email}
						type="text"
						onChange={this.update('email')}
					/>
					<br />
					<input 
						placeholder="Password"
						type="password"
						onChange={this.update('password')}
						onSelect={e => this.renderConfirm()}
					/>
					<input 
						id="confirm-password"
						placeholder="Re-enter password"
						type="password"
						onChange={this.update('passwordConfirm')}
					/>
					<br />
					<button type="submit">Sign Up</button>
					{this.confirmPassword()}
					
				</form>
			</div>
		)

	}

}

export default SignupForm