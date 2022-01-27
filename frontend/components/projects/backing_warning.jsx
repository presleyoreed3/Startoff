import React from 'react'
import noGuarantee from '../../../app/assets/images/warnings/no-guarantee.png'

class BackingWarning extends React.Component{

	render(){
		return(
			<div>
				<img src={noGuarantee}/>
			</div>
		)
	}

}

export default BackingWarning