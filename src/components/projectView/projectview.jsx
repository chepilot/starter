import React from 'react';
import ReactDOM from 'react-dom'
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
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {

		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments);
		});

		scrollSpy.update();

	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render(){
		return (
			<div className="projectView">
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
								<li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
								<li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
								<li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
							</ul>
						</div>
					</div>
				</nav>


				<Element name="test1" className="element" >
					test 1
				</Element>

				<Element name="test2" className="element">
					test 2
				</Element>

				<Element name="test3" className="element">
					test 3
				</Element>

				<Element name="test4" className="element">
					test 4
				</Element>



			</div>
		);
	}
}

export default ProjectView
