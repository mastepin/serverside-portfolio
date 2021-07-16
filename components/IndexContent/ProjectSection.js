import React, { Component } from 'react'
import {
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane
} from 'reactstrap'
import ProjectGallery from './ProjectGalleries/ProjectGallery'
import DummyProjectGallery from './ProjectGalleries/DummyGallery'
import ActivityGallery from './ProjectGalleries/ActivityGallery'
import classnames from 'classnames';

export default class ProjectSection extends Component {
	constructor(props) {

		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1',
			show: 1
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
				show: tab
			});
		}
	}
	render() {
		return (
			<div className="section section-container mt-5">
				<div className="container">
					<div className="row mb-3">
						<div className="col-12 text-center">
							<div className="section-title"
								 data-aos="fade-up" 
								 data-aos-duration="1000"
								 data-aos-delay="50">
								<h3>Some Of My Work</h3>
							</div>
							<div className="row">
								<div className="offset-md-4 offset-lg-4" />
								<div className="col-md-4"
									 data-aos="fade-up" 
									 data-aos-duration="1000"
									 data-aos-delay="200">
									<div className="section-subtitle">
										<p>Here's what I've been working on all this time , this is just some work I can publish</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="project-gallery" style={{textAlign: 'center'}}>
						<Nav tabs 
							 data-aos="fade-up" 
							 data-aos-duration="1000"
						 	 data-aos-delay="500">
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
									My Projects
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
									My Dummy Projects
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
										My Activites
									</NavLink>
								</NavItem>
							</Nav>
							<div className="gallery-divider" 
							 data-aos="fade-up" 
							 data-aos-duration="1000"
						 	 data-aos-delay="400"/>
								<TabContent activeTab={this.state.activeTab} 
									data-aos="fade-up" 
									data-aos-duration="1000"
									data-aos-delay="700">
									<TabPane tabId="1" className={`fade ${this.state.activeTab === '1' ? 'show' : ''}`}>
										<div className="row">
											<ProjectGallery />
										</div>
									</TabPane>
									<TabPane tabId="2" className={`fade ${this.state.activeTab === '2' ? 'show' : ''}`}>
										<div className="row">
											<DummyProjectGallery />
										</div>
									</TabPane>
								<TabPane tabId="3" className={`fade ${this.state.activeTab === '3' ? 'show' : ''}`}>
									<div className="row">
										<ActivityGallery />
									</div>
								</TabPane>
							</TabContent>
					</div>
				</div>
			</div>
		);
	}
}