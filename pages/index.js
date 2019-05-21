import React from 'react'
import { Button } from 'reactstrap'
import Navbar from '../components/Navbar'
import TopContent from '../components/IndexContent/TopContent'
import AboutMe from '../components/IndexContent/AboutMe'
import DownloadSection from '../components/IndexContent/DownloadSection'
import ProjectSection from '../components/IndexContent/ProjectSection'
import SkillSection from '../components/IndexContent/SkillSection'
import AboutApp from '../components/IndexContent/AboutApp'
import Footer from '../components/Footer'

class Index extends React.Component {

	render() {
		return(
			<div>
				<Navbar />
				<TopContent />
			    <div className="content" id="content" style={{overflow: 'hidden'}}>
					<AboutMe />
					<DownloadSection />
					<ProjectSection />
					<SkillSection />
					<AboutApp />
			    </div>
			    <Footer />
			</div>
		)
	}
}

export default Index;