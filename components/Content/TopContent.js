import React from 'react'
import Link from 'next/link'

export default class TopContent extends React.Component {
	render(){
		return (
			<div className="top-content">
				<div className="inner-bg">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="text-title">
									<h2 className="text-white">My Name is</h2>
									<h2 className="text-white">Kelvin Kurniawan Oktavianto</h2>
								</div>
								<div className="text-description">
									<p className="text-white">Welcome to my Portofolio page, find out more about me and my project. <br />I like to see the sky and are interested in programming</p>
								</div>
								<div className="button-container">
									<Link href="/contact">
										<a className="btn ghost-button">Contact Me Now</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="backstrech">
					<img src="https://azmind.com/demo/navbar-tutorial-bootstrap-4/assets/img/backgrounds/1.jpg" className="imageBackstrech"/>
				</div>
			</div>
		)
	}
}