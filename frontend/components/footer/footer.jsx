import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component {

	render(){
		return(
			<footer>
				<div id='footer-category'>

				</div>
				<div id='footer-info'>
					<label>About</label>
					<a href="https://github.com/presleyoreed3">GitHub</a>
					<a href="https://www.linkedin.com/in/presleyoreed3/">LinkedIn</a>
					<a href="www.presleyoreed.com">Personal Site</a>
					<a href="https://angel.co/u/presley-reed-iii">AngelList</a>
				</div>
			</footer>
		)
	}

}

export default Footer