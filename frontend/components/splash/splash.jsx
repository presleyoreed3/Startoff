import React from 'react'
import splash2 from "../../../app/assets/images/splash-images/growth2.jpg"


class Splash extends React.Component{

	render(){
		return(
			<div id="splash">
				<div id="banner-image">
					<img src={splash2}/>
				</div>
			</div>
		)
	}

}

export default Splash