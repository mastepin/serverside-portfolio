import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'
import './../src/style/fonts.css'
import './../src/style/style.css'
import './../src/style/responsive.css'

export default class MyApp extends App {

	componentDidMount() {
		AOS.init();
	}

	static async getInitialProps ({ Component, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Head>
					<title>My Portofolio</title>
				</Head>
				<Component {...pageProps} />
			</Container>
		)
	}
}