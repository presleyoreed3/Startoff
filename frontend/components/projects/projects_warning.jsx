import React from 'react'
import {Link} from 'react-router-dom'
import mapIcon from "../../../app/assets/images/warnings/map.png"
import chatIcon from "../../../app/assets/images/warnings/chat.png"
import hornIcon from "../../../app/assets/images/warnings/horn.png"

class ProjectWarning extends React.Component{

	render(){
		return(
			<div id="warning-container">
				<div id="warnings">
					<div id="map">
						<img src={mapIcon}/>
						<p>Staroff connects creators with backers to fund projects.</p>
					</div>
					<div id="chat">
						<img src={chatIcon}/>
						<p>Rewards aren’t guaranteed, but creators must regularly update backers.</p>
					</div>
					<div id="horn">
						<img src={hornIcon}/>
						<p>You’re only charged if the project meets its funding goal by the campaign deadline.</p>
					</div>
				</div>
			</div>
		)
	}

}

export default ProjectWarning;