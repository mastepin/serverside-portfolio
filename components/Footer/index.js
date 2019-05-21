import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="offset-md-3" />
						<div className="col">
							<h3 className="footer-text-title">FIND <span className="text-danger">ME</span> ON</h3>
							<p>
								Don't hesitate to contact me, you can find me on social media, 
								if something is urgent you can contact me on WhatsApp
							</p>
						</div>
						<div className="offset-md-3" />
					</div>
					<div className="line-separator" />
					<div className="row">
						<div className="col">
							<div className="social-button">
								<a className="social-link" href="https://instagram.com/_kelvinko"><i className="fab fa-instagram fa-5x" /></a>
								<a className="social-link" href="https://github.com/mastepin"><i className="fab fa-github fa-5x" /></a>
								<a className="social-link" href="https://www.linkedin.com/in/kelvin-kurniawan-oktavianto-22755b174"><i className="fab fa-linkedin fa-5x" /></a>
								<a className="social-link" href="https://twitter.com/_kelvinko"><i className="fab fa-twitter fa-5x" /></a>
							</div>
						</div>
					</div>
				</div>
				<div className="watermark">
					<p>Made with feel <i className="fa fa-heart" style={{color:'#dc3545'}}/> - Kelvin Kurniawan Oktavianto</p>
				</div>
			</footer>
		);
	}
}