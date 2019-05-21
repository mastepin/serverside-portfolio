import React, { Component } from 'react'
import Hackathon2018 from '../../../src/images/hackathon-2018.jpg'

export default class ActivityGallery extends Component {
	constructor(props) {
		super(props)
		const image = [{
			image_name: 'Hackathon Solo Membangun 2018',
			url: Hackathon2018
		}]

		this.state = {
			image
		};
	}
	render() {
		let build
		if (this.state.image.length > 0) {
			let delay = 700
			build = (
				this.state.image.map(res => (
					<div className="col-md-3 mb-3"
						 data-aos="fade-up" 
						 data-aos-duration="1000"
					 	 data-aos-delay={delay+=100}
					 	 key={res.image_name}>
						<div className="project-link" href="/">
							<img src={res.url} className="project-image" alt={res.image_name} rel="prefetch" />
							<div className="project-caption">
								<p>{res.image_name}</p>
							</div>
						</div>
					</div>
				))
			)
		} else {
			build = (
				<div className="col-md-12 text-center">There is No Available!</div>
			)
		}

		return build
	}
}