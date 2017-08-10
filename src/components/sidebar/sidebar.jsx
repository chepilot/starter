import React from 'react'
import './sidebar.css'
import { push as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
	showSettings (event) {
		event.preventDefault();
	}

	render () {
		return (
			<Menu width={ '220px'} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="project" className="menu-item" href="/project">Project</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
				<a id="signature">site demo @ruize</a>
			</Menu>
		);
	}
}

export default Sidebar
