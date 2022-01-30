import React from 'react'
import splash1 from "../../../app/assets/images/splash-images/growth1.jpg"
import splash2 from "../../../app/assets/images/splash-images/growth2.jpg"
import splash3 from "../../../app/assets/images/splash-images/growth3.jpg"
import splash4 from "../../../app/assets/images/splash-images/growth4.jpg"
import { Link } from 'react-router-dom'


class Splash extends React.Component{

	constructor(props){
		super(props)
		this.randomBanner = this.randomBanner.bind(this)
		this.randomQuote = this.randomQuote.bind(this)
	}

	randomBanner(){
		let imageIndex = Math.floor(Math.random() * (3 + 1));
		let imageArray = [splash1, splash2, splash3, splash4]
		return imageArray[imageIndex];
	}

	randomQuote(){
		let quoteIndex = Math.floor(Math.random() * (5 + 1));
		let quoteArray = [
			"Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",
			"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
			"Congratulations! Today is your day. You're off to Great Places! You're off and away.",
			"The most difficult thing is the decision to act, the rest is merely tenacity.",
			"The best time to plant a tree was 20 years ago. The second best time is now.",
			"The two most important days in your life are the day you are born and the day you find out why."
		]
		let quoteCredit = [
			"Wayne Gretzky",
			"Michelle Obama",
			"Dr. Suess",
			"Amelia Earhart",
			"Chinese Proverb",
			"Mark Twain"
		]

		return(
			<div>
				<h1>
					"{quoteArray[quoteIndex]}"
				</h1>
				<br />
				<p>-{quoteCredit[quoteIndex]}</p>
			</div>
		)

	}

	render(){
		return(
			<div id="splash">
				<div id="banner-image">
					<img src={this.randomBanner()}/>
					<div className="quote">
						{this.randomQuote()}
					</div>
				</div>
				<div id="info">
					<div id="top-details">
						<h1>Startoff Right</h1>
						<p>
							Welcome to Startoff the best place on the internet to start your project off right.
							At Startoff we believe that the only thing between you and the next big idea is simply getting started.
							We are hear to help you capture your goals and turn them into beautiful outcomes. You have the idea and we will bring the money.
						</p>
					</div>
				</div>
				<div id="prompt-buttons">
					<div id="discover">
						<h3>Discover a Startoff</h3>
						<p>Discover the best of what Startoff has to offer</p>
						<Link to="/projects"><button>To Discover</button></Link>
					</div>
					<div id="seperator"><hr /></div>
					<div id="create">
						<h3>Become a Startoff</h3>
						<p>Start the journey to create your own startoff</p>
						<Link to="/projects/new"><button>To Create</button></Link>
					</div>
				</div>
			</div>
		)
	}

}

export default Splash