import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Fade } from 'reactstrap'
import Head from 'next/head'

export default class About extends Component {
	render() {
		return (
			<div>
				<Head>
					<title>About Me</title>
				</Head>
				<div className="main">
					<Fade in>
						<Navbar isPages />
				        <div className="content" id="content" style={{paddingTop: '100px', marginBottom: '100px', overflow: 'hidden'}}>
				        	<div className="container">
					        	<div className="row">
					        		<div 
					        			className="col text-center"
					        			data-aos="fade-up" 
										data-aos-duration="1000"
									    data-aos-delay="50"
									    data-aos-once="true"
					        		>
					        			<img src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" className="image-profile-about" alt="profiles"/>
					        		</div>
					        	</div>
					        	<div className="row mt-5 items-center">
					        		<div 
					        			className="col-md-5"
					        			data-aos="fade-right" 
										data-aos-duration="1000"
									    data-aos-delay="300"
									    data-aos-once="true"
									>
					        			<div className="about-title">
					        				<h3>Hey There!</h3>
					        			</div>
					        			<div className="about-description">
					        				<p>
					        					My name is Kelvin Kurniawan Oktavianto but you can call me Kelvin and I'm a full-stack web developer and mobile developer. 
					        					I build back-ends using PHP and Node js with frameworks such as Laravel, Codeigniter, Lumen and Express js. 
					        					I use React js, Wordpress and more to build enjoyable user experiences on the front-end. And I use React Native to build mobile application
					        				</p>
					        				<p>
					        					If you have an idea for a project you'd like to work on, just use the contact form on this page and you can reach me directly!
					        				</p>
					        				<p>
					        					<a href="https://something" className="link">Click here for a list of stuff I'm using.</a>
					        				</p>
					        			</div>
					        			<div className="action-container">
					        				<a href="https://something" className="btn ghost-button ghost-teal">Download CV & Cerificates</a>
					        			</div>
					        		</div>
					        		<div className="offset-md-1" />
					        		<div 
					        			className="col-md-6 mt-5"
					        			data-aos="fade-left" 
										data-aos-duration="1000"
									    data-aos-delay="600"
									    data-aos-once="true"
					        		>
					        			<div className="contact-form">
					        				<h3 className="text-center">Send Message</h3>
					        				<form>
					        				  	<div className="form-group">
					        				      	<input className="form-control" id="inputName" placeholder="Your Name" />
					        				  	</div>
					        				  	<div className="form-group">
					        				      	<input type="text" className="form-control" id="inputEmail" placeholder="Your Email" />	
					        				  	</div>
					        				  	<div className="form-group">
					        				  		<textarea id="inputMessage" className="form-control" placeholder="Your Message" rows="7"/>
					        				  	</div>
					        				  	<div className="text-right">
					        				  		<button type="submit" className="btn btn-danger">Send Message</button>
					        				  	</div>
					        				</form>
					        			</div>
					        		</div>
					        	</div>
					        </div>
				        </div> 
				        <Footer />
				    </Fade>
				</div>
			</div>
		);
	}
}