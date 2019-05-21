import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import { Fade } from 'reactstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import fetch from 'isomorphic-fetch'

const Single = ({ post }) => (
	<div>
		<Head>
			<title>{post.title.rendered}</title>
		</Head>
		<div className="main">
			<Fade in>
				<Navbar/>
				<div className="content article-container" id="content" style={{overflow: 'hidden'}}>
					<div 
						style={{
						backgroundColor: '#4dc0b5',
						paddingTop: '150px',
						paddingBottom: '150px',
						borderRadius : '0% 100% 0% 100% / 90% 0% 100% 10%',
						marginBottom: '50px',
							boxShadow: 'rgba(0, 0, 0, 0.4) 0px 10px 50px -26px'
						}} 
						data-aos="fade-down" 
						data-aos-duration="1000"
						>
						<h1 className="text-white text-center" dangerouslySetInnerHTML = {{ __html: post.title.rendered}} 
							data-aos="fade-down" 
							data-aos-duration="1000"
							data-aos-delay="200"/>
					</div>
					<div className="container article-container"							
						data-aos="fade-up" 
						data-aos-duration="1000"
						data-aos-delay="400">
						<div className="row">
							<div className="offset-md-2" />
							<div className="col-md-8">
								<div className="post-content" dangerouslySetInnerHTML = {{ __html: post.content.rendered}} />
								<div className="action-container">
									<Link href="/blog"><a className="btn ghost-button ghost-teal"><i className="fa fa-arrow-left"/> Back To Blog</a></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</Fade>
		</div>
	</div>
)

Single.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://blog.kelvink.id/wp-json/wp/v2/posts/?slug=${query.slug}`)
  const json = await res.json()
  return { post: json[0] }
}

export default Single