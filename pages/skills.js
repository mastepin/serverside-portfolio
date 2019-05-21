import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skill from '../components/IndexContent/SkillSection'
import { Fade } from 'reactstrap'
import Head from 'next/head'

export default class Skills extends Component {
	render() {
		return (
			<div>
				<Head>
					<title>My Skills</title>
				</Head>
				<div className="main">
					<Fade in>
						<Navbar isPages />
						<div className="content" id="content" style={{overflow: 'hidden'}}>
							<Skill isPages />
						</div>
						<Footer />
					</Fade>
				</div>
			</div>
		);
	}
}