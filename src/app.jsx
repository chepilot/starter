import React from 'react';
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import ProjectOverview from './components/projectOverview/projectoverview'
import ProjectView from './components/projectview/projectview'
import '../styles/index.scss';


export default class App extends React.Component {
  render() {
    return (
      <div id="outer-container">
				<Sidebar/>
				<main id="page-wrap" >
					<Home/>
					{/*<ProjectOverview/>*/}
					{/*<ProjectView/>*/}
				</main>
      </div>
    )
  }
}
