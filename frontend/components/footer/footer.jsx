import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../app/assets/images/startoff-logo.png';

class Footer extends React.Component {

	render(){
		return(
			<footer>
				<div id='footer-category'>
					<a href="#">Arts</a>
					<a href="#">Comics & Illustration</a>
					<a href="#">Design & Tech</a>
					<a href="#">Film</a>
					<a href="#">Food & Craft</a>
					<a href="#">Games</a>
					<a href="#">Music</a>
					<a href="#">Publishing</a>
				</div>
				<div id="footer-nav">
					<div id="footer-logo">
						<img src={logo} id="img-logo"></img>
						<p>&#169; Presley Reed III 2022</p>
					</div>
					
					<div id='footer-info'>
						<h3>About</h3>
						<a href="https://github.com/presleyoreed3">GitHub</a>
						<a href="https://www.linkedin.com/in/presleyoreed3/">LinkedIn</a>
						<a href="www.presleyoreed.com">Personal Site</a>
						<a href="https://angel.co/u/presley-reed-iii">AngelList</a>
					</div>

				</div>
			</footer>
		)
	}

}

export default Footer