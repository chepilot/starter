import React from 'react'
import './sidebar.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {push as Menu } from 'react-burger-menu'


class Sidebar extends React.Component {
	showSettings (event) {
		event.preventDefault();
	}

	render () {
		return (
				<Menu id='push' width={'220px'}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
					<Link id="home" className="menu-item" to='/'>Home</Link>
					<Link id="project" className="menu-item" to='/projectoverview'>Project</Link>
					<a id="contact" className="menu-item--small" href="">Contact</a>
					<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
					<a id="signature">site demo @ruize</a>
				</Menu>
				);
	}
}

export default Sidebar
