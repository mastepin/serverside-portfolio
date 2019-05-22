import React, { Component } from 'react';

export default class ProfileWidget extends Component {
	render() {
		return (
			<div className="profile-card">
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-md-4 text-center">
								<img src="https://id.gravatar.com/userimage/115494265/c4a90bd28aadff51ea4bf88f339d3181.png?size=200" className="image-profile-widget" alt="profiles"/>
							</div>
							<div className="col-md-8">
								<h5 className="card-title">Kelvin Kurniawan Oktavianto</h5>
								<p className="card-text">Application developers.</p>
								<div className="row">
									<a href="https://www.instagram.com/_kelvinko/" className="btn ghost-button ghost-teal rounded responsive m-2 col"><i className="fab fa-instagram" /> Instagram</a>
									<a href="https://www.twitter.com/_kelvinko" className="btn ghost-button ghost-teal rounded responsive m-2 col"><i className="fab fa-twitter" /> Twitter</a>
									<a href="https://wa.me/082226720813" className="btn ghost-button ghost-teal rounded responsive m-2 col"><i className="fab fa-whatsapp" /> WhatsApp</a>
									<a href="https://wa.me/082226720813" className="btn ghost-button ghost-teal rounded responsive m-2 col"><i className="fab fa-facebook" /> Facebook</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}