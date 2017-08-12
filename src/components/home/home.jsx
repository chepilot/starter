import React from 'react';
import './home.css';


class Home extends React.Component{
	componentDidMount() {
		document.getElementById('page-wrap').style.position = "absolute";
		document.getElementById('page-wrap').style.height = "100%";
		document.getElementById('page-wrap').style.width = "100%";
	}

	render(){
		return(
			<div className="home">
				{/*<div>*/}

				{/*</div>*/}
				{/*<span className="projectName">*/}
					{/*NEW YORK, NEW YORK*/}
				{/*</span>*/}
			</div>
		);
	}
}

export default Home
