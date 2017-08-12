import React from 'react';
import './projectview.css'
import Scroll from 'react-scroll';
import Slider from 'react-slick';


var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

class ProjectView extends React.Component{
	constructor (props){
		super(props);
	}

	componentDidMount() {
		document.getElementById('page-wrap').style.position = "";
		document.getElementById('page-wrap').style.height = "";
		scrollSpy.update();
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
						<li><Link activeClass="active" to="test1" spy={true} smooth={true} duration={500}>1. Introduction</Link></li>
						<li><Link activeClass="active" to="test2" spy={true} smooth={true} duration={500}>2. Abstract</Link></li>
						<li><Link activeClass="active" to="test3" spy={true} smooth={true} duration={500}>3. Design philosophy</Link></li>
						<li><Link activeClass="active" to="test4" spy={true} smooth={true} duration={500}>4. History</Link></li>
						<li><Link activeClass="active" to="test5" spy={true} smooth={true} duration={500}>5. Content 1</Link></li>
						<li><Link activeClass="active" to="test6" spy={true} smooth={true} duration={500}>6. Content 2</Link></li>
						<li><Link activeClass="active" to="test7" spy={true} smooth={true} duration={500}>7. Content 3</Link></li>
						<li><Link activeClass="active" to="test8" spy={true} smooth={true} duration={500}>8. Content 4</Link></li>
					</ul>
				</div>

				<div className="project-content">
					<Element name="test1" className="target" >
						<Slider {...settings} >
							<div>
								<img src={require('../../image/home.jpg')} className="slider-image"/>
							</div>
							<div>
								<img src={require('../../image/a.jpg')} className="slider-image"/>
							</div>
						</Slider>
					</Element>
					<Element name="test2" className="target">
						2. Abstract
					</Element>
					<Element name="test3" className="target">
						3. Design philosophy
					</Element>
					<Element name="test4" className="target">
						4. History
					</Element>
					<Element name="test5" className="target">
						5. Content 1
					</Element>
					<Element name="test6" className="target">
						6. Content 2
					</Element>
					<Element name="test7" className="target">
						7. Content 3
					</Element>
					<Element name="test8" className="target">
						8. Content 4
					</Element>
				</div>
			</div>
		);
	}
}

export default ProjectView
