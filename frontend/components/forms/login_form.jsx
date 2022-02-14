import React from 'react'
import {Link} from 'react-router-dom'

class LoginForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e){
		e.preventDefault();
		const user = Object.assign({}, this.state)
		this.props.processForm(user).fail(() => this.setState({errors: this.props.errors}));
	}

	update(field){
		return e => this.setState({[field]: e.currentTarget.value})
	}

	renderErrors(){
		if (this.state.errors.length){
			return (this.state.errors.map((error, idx) => {
				return(<p key={idx}>{error}</p>)
			}))
		}
	}


	//Signs in a demo user for testing/displaying
	signInDemo(){
		const demoObject = {
			email: 'demo@startoff.com',
			password: 'demo-user'
		}
		const user = Object.assign({}, this.state, demoObject)
		this.setState({errors: []})
		this.props.processForm(user)
	}

	render(){
		return(
			<div id="login-div">
				<form id="login-form" onSubmit={this.handleSubmit}>
					<h2>Log In</h2>
					<div id="validation">{this.renderErrors()}</div>
					<label>
						<input
							placeholder="Email"
							value={this.state.email}
							type="text"
							onChange={this.update('email')}
							
						/>
					</label>
					<br />
					<label>
						<input 
							placeholder="Password"
							value={this.state.password}
							type="password"
							onChange={this.update('password')}
							
						/>
					</label>
					<br />
					<button type="submit">Log In</button>
					<div id='or-divider'>
						<div className="or"></div>
						<p> or </p>
						<div className="or"></div>
					</div>

					<div id="secondary-form">
					<div id="signup-question">
						<Link to="/signup"><button>Sign up</button></Link>
					</div>
					<div id="demo-user">
						<button onClick={() => this.signInDemo()}>Demo User</button>
					</div>
					</div>
				</form>
			</div>
		)

	}

}

export default LoginForm