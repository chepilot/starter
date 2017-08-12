import React from 'react';
import './projectentry.css'
import { Link} from 'react-router-dom'

class ProjectEntry extends React.Component{

	render(){
		return (
			<div className="project-entry">
				<div className="entry-title">
					Section Title
				</div>
				<div className="entry-text">
					Lorem ipsum dolor sit amet, pri soluta iisque hendrerit ad, cu eum stet nullam admodum. Dicit verterem sit at, omnesque indoctum ex usu. Cu amet officiis nec. Recteque definitionem mel ea. Et mel dolore voluptatum, ex has ferri sapientem comprehensam. Corpora mnesarchum et vis, possim voluptaria eu vis, mel omnesque deleniti no.
				</div>

				<div className="entry-button">
						<button>
							<Link to='/projectview'>
								Enter Section
							</Link>
						</button>
				</div>
			</div>
		);
	}
}

export default ProjectEntry
