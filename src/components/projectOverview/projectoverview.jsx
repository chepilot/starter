import React from 'react';
import './projectoverview.css'

class ProjectOverview extends React.Component{
	render(){
		return(
			<div className="projectOverview">
				<div className="column">
					<a><img src={require('../../image/home.jpg')} className="imageCascade"/></a>
					<a><img src={require('../../image/a.jpg')} className="imageCascade"/></a>
					<a><img src={require('../../image/b.jpg')} className="imageCascade"/></a>
					<a><img src={require('../../image/c.jpg')} className="imageCascade"/></a>
				</div>
				<div className="text-column">
					<p className="text">
						Lorem ipsum dolor sit amet, venenatis hendrerit commodo nulla, euismod ac suspendisse nulla, nibh consequat dapibus rhoncus lacus, auctor ipsum sit commodo sed sed. Viverra est nunc non, elit a, mauris volutpat wisi libero mauris, orci non sit morbi vestibulum, senectus suspendisse fringilla laoreet. Suspendisse eu donec pulvinar. Pharetra diam massa amet id tempor, scelerisque proin, euismod nulla velit convallis nam accumsan, eu enim suspendisse, wisi molestie amet. Sem posuere porta, sociis at, enim tempus, diam elit diam, phasellus amet sagittis maecenas lacus. Viverra rutrum pellentesque, est est integer cras felis placerat. Pede at sit, blandit vehicula, condimentum nulla elementum, consectetuer felis libero sapien urna. Tellus augue, ac sodales vel imperdiet rutrum sed erat. Id mauris enim, aliquet eros pede enim mauris, tempus turpis lacinia et lacus. Eu dui.
						viverra id massa luctus, adipiscing lacus justo. Praesent massa voluptas leo ac, dui imperdiet ultricies purus ipsum gravida. Et eros sed maecenas dui facilisis, pellentesque excepturi amet in sapien hendrerit nulla, nisl consequat nec, illum elit velit egestas. Rhoncus class dis dolor mauris eget dolore, integer elit curabitur et, et cursus amet libero magna justo morbi, eget ligula adipiscing sit, pellentesque vitae diam non ullamcorper wisi purus. Duis ut nullam dui numquam, tempor nulla, morbi sit nunc, in donec proin, et consequat. Justo dolores maecenas vulputate scelerisque quam massa, arcu maecenas ipsum vestibulum eros, pharetra nullam. Sed consectetuer sit, nunc suspendisse et ultrices, ipsum magnis.
					</p>
				</div>
			</div>
			);
	}
}

export default ProjectOverview
