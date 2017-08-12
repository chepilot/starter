import React from 'react';
import './projectoverview.css'
import {	BrowserRouter as Router,Route,Link} from 'react-router-dom'
import ProjectEntry from '../projectentry/projectentry'

class ProjectOverview extends React.Component{
	componentDidMount() {
		document.getElementById('page-wrap').style.position = "absolute";
		document.getElementById('page-wrap').style.height = "100%";
		document.getElementById('page-wrap').style.width = "100%";
	}

	render(){
		return(
			<div className="projectOverview">
				<div className="column">
					<div className="img-a">
						<img src={require('../../image/home.jpg')} className="imageCascade"/>
					</div>
					<div className="img-b">
						<img src={require('../../image/a.jpg')} className="imageCascade"/>
					</div>
					<div className="img-c">
						<img src={require('../../image/b.jpg')} className="imageCascade"/>
					</div>
					<div className="img-d">
						<img src={require('../../image/c.jpg')} className="imageCascade"/>
					</div>
				</div>

				<div className="entry-column">
					<ProjectEntry/>
				</div>
			</div>
			);
	}
}

export default ProjectOverview
