import React, { Component } from 'react'

export default class AbputApp extends Component {
	constructor(props) {

		super(props);

		const skills = [{
			appName: 'JavaScript',
			icon: 'fab fa-js-square fa-8x'
		}, {
			appName: 'React',
			icon: 'fab fa-react fa-8x'
		}, {
			appName: 'CSS3',
			icon: 'fab fa-css3 fa-8x'
		}, {
			appName: 'bootstrap',
			icon: 'fab fa-bootstrap fa-8x'
		}, {
			appName: 'Nodejs',
			icon: 'fab fa-node-js fa-8x'
		}]

		this.state = {
			skills
		};
	}

	render() {
		let delay = 300
		return (
			<div className="section section-container p-5">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<div className="section-title"
								 data-aos="fade-up" 
								 data-aos-duration="1000">
								<h3>About Application</h3>
							</div>
							<div className="row">
								<div className="offset-md-4 offset-lg-4" />
								<div className="col-md-4">
									<div className="section-subtitle"
										 data-aos="fade-up" 
										 data-aos-duration="1000"
										 data-aos-delay="100">
										<p>This Application is built using</p>
									</div>
								</div>
							</div>
							<div className="skill-divider"
								 data-aos="fade-up" 
								 data-aos-duration="1000"
								 data-aos-delay="300"/>
							<div className="aboutapp">
								<div className="row">
									{this.state.skills.map(about => (
										<div className="col-md-3 col-sm-12 mb-5"
											 data-aos="fade-up" 
											 data-aos-duration="1000"
											 data-aos-delay={delay+=100} key={about.appName}>
											<div className="aboutapp-panel">
												<div className="row">
													<div className="col-md-12">
														<i className={`${about.icon} aboutapp-icon`}/>
													</div>
													<div className="offset-md-2 col-md-8 text-center mt-2">
														<div className="aboutapp-divider" />
													</div>
													<div className="col-md-12">
														<p className="aboutappName">{about.appName}</p>
													</div>
												</div>
											</div>
										</div>
									))}	
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}