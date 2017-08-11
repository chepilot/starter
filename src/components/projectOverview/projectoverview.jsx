import React from 'react';
import './projectoverview.css'
import {	BrowserRouter as Router,Route,Link} from 'react-router-dom'
import ProjectEntry from '../projectentry/projectentry'



class ProjectOverview extends React.Component{

	render(){
		return(
			<Router>

			<div className="projectOverview">
				<div className="column">
					<Link to='/projectentry'><img src={require('../../image/home.jpg')} className="imageCascade"/></Link>
					<Link to='/projectentry'><img src={require('../../image/a.jpg')} className="imageCascade"/></Link>
					<Link to='/projectentry'><img src={require('../../image/b.jpg')} className="imageCascade"/></Link>
					<Link to='/projectentry'><img src={require('../../image/c.jpg')} className="imageCascade"/></Link>
				</div>

				<div className="entry-column">
						<Route path="/projectentry" component={ProjectEntry}/>
				</div>
			</div>
			</Router>
			);
	}
}

export default ProjectOverview
