import React from 'react'
import splash1 from "../../../app/assets/images/splash-images/growth1.jpg"
import splash2 from "../../../app/assets/images/splash-images/growth2.jpg"
import splash3 from "../../../app/assets/images/splash-images/growth3.jpg"
import splash4 from "../../../app/assets/images/splash-images/growth4.jpg"



class Splash extends React.Component{

	constructor(props){
		super(props)
		this.randomBanner = this.randomBanner.bind(this)
	}

	randomBanner(){
		let imageIndex = Math.floor(Math.random() * (3 + 1));
		let imageArray = [splash1, splash2, splash3, splash4]
		return imageArray[imageIndex];
	}

	render(){
		return(
			<div id="splash">
				<div id="banner-image">
					<img src={this.randomBanner()}/>
					<div className="quote">
						<h1>Inspirational Quote</h1>
					</div>
				</div>
				
			</div>
		)
	}

}

export default Splash