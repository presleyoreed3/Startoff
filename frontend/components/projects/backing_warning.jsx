import React from 'react'
import noGuarantee from '../../../app/assets/images/warnings/no-guarantee.png'

class BackingWarning extends React.Component{

	render(){
		return(
			<div id="backing-warning">
				<img src={window.warning}/>
				<p>Your pledge will support an ambitious creative project that has yet to be developed. There’s a risk that, despite a creator’s best efforts, your reward will not be fulfilled, and we urge you to consider this risk prior to pledging. Startoff is not responsible for project claims or reward fulfillment.</p>
			</div>
		)
	}

}

export default BackingWarning