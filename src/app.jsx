import React from 'react';
import Doormat from './components/doormat/doormat'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import ProjectOverview from './components/projectOverview/projectoverview'
import ProjectView from './components/projectview/projectview'
import '../styles/index.scss';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


export default class App extends React.Component {
  render() {
    return (
			<Router>
				<div id="outer-container">
					<Sidebar/>
					<main id ="page-wrap" >
						<Doormat/>
						<Route exact path="/" component={Home}/>
						<Route path="/projectoverview" component={ProjectOverview}/>
						<Route path="/projectview" component={ProjectView}/>
					</main>
	</div>
			</Router>
    )
  }
}

