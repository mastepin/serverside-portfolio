import React from 'react'
import { Button } from 'reactstrap'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import TopContent from '../components/Content/TopContent'

class Index extends React.Component {

	render() {
		return(
			<div>
				<Navbar />
				<TopContent />
			    <div className="content" id="content" style={{overflow: 'hidden', height: '1000px'}}>
			    </div>
			</div>
		)
	}
}

export default Index;