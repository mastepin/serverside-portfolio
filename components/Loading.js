import React, { Component } from 'react';
import { Fade, Spinner } from 'reactstrap'

export default class Loading extends Component {
	render() {
		return (
			<div className="main">
				<Fade in>
					<div className="content article-container" id="content" style={{overflow: 'hidden', paddingTop:'250px'}}>
				        <div className="text-center" style={{marginBottom: '30px'}}>
					        <Spinner type="grow" color="primary" />
					        <Spinner type="grow" color="secondary" />
					        <Spinner type="grow" color="success" />
					        <Spinner type="grow" color="danger" />
					        <Spinner type="grow" color="warning" />
					        <Spinner type="grow" color="info" />
					        <Spinner type="grow" color="light" />
					        <Spinner type="grow" color="dark" />
					     </div>
						<h1 className="text-center">Loading..</h1>
					</div>
				</Fade>
			</div>
		);
	}
}