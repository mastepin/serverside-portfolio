import React from 'react'
import Link from 'next/link'

class About extends React.Component {
	render() {
		return(
			<div style={{ textAlign: 'center' }}>
				<h1>This is about page</h1>
				<Link href="/">
					<a className="btn btn-primary" title="Back to home">Back to home</a>
				</Link>
			</div>
		)
	}
}

export default About;