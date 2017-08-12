import React from 'react';
import './projectview.css'
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class ProjectView extends React.Component{
	constructor (props){
		super(props);
	}

	componentDidMount() {
		scrollSpy.update();
		document.getElementById('page-wrap').style.position = "";
		document.getElementById('page-wrap').style.height = "";
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		return (
			<div className="projectView">
				<div className="project-menu">
					<ul>
						<li><Link activeClass="active" to="test1" spy={true} smooth={true} duration={500}>Test 1</Link></li>
						<li><Link activeClass="active" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
						<li><Link activeClass="active" to="test3" spy={true} smooth={true} duration={500}>Test 3</Link></li>
					</ul>
				</div>

				<div className="project-content">
					<Element name="test1" className="target" >
						test 1
					</Element>
					<Element name="test2" className="target">
						test 2
					</Element>
					<Element name="test3" className="target">
						test 3
					</Element>
				</div>

			</div>
		);
	}
}

export default ProjectView
