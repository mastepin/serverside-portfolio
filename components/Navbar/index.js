import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap'
import Link from 'next/link'
import './Navbar.css'

export default class MyNavbar extends React.Component {
	constructor(props) {
		super(props)
		let scrolled = false
		let navbarClass = 'navbar-no-bg navbar-dark'

		if (this.props.isPages) {
			scrolled = true
			navbarClass = 'navbar-with-bg navbar-light'
		}

		this.state = {
			isOpen: false,
			scrolled,
			navbarClass
		}
		this.offset = null
		this.toggle = this.toggle.bind(this)
	}

	componentDidMount() {
		document.addEventListener('scroll', this.trackScrolling)
		this.offset = document.getElementById("content").offsetTop + 30
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.trackScrolling)
	}

	trackScrolling = () => {
		if (!this.props.isPages) {
			if (window.pageYOffset <= 50) {
				this.setState({
					scrolled: true,
					navbarClass: 'navbar-no-bg navbar-dark'
				})
			} else if (window.pageYOffset > 80 && window.pageYOffset <= this.offset) {
				this.setState({
					scrolled: true,
					navbarClass: 'navbar-on-top-content navbar-dark'
				})
			} else if (window.pageYOffset > this.offset) {
				this.setState({
					scrolled: true,
					navbarClass: 'navbar-with-bg navbar-light'
				})
			}
		}

	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<header>
				<Navbar color={ this.state.scrolled ? "white" : "dark"} fixed="top" expand="md" className={ this.state.navbarClass }>
					<Link href="/">
						<a className="navbar-brand">kelvinportfolio</a>
					</Link>
					<NavbarToggler onClick={this.toggle} className="myNavbar"/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link prefetch href="/about">
									<NavLink>About Me</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/mastepin" target="_blank">Github</NavLink>
							</NavItem>
							<NavItem>
								<Link prefetch href="/blog">
									<NavLink>Blog</NavLink>
								</Link>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Hire Me
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Via Call
									</DropdownItem>
									<DropdownItem>
										Via Email
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Meet Me
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}