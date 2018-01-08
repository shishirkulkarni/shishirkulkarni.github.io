import React, {Component} from 'react';
import '../styles/experience.css';

export default class Experience extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="experience row separated">
				<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h2>Work Experience</h2>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<a className="title" href="https://www.gslab.com/" target="_blank"><strong>GS Lab Pvt Ltd</strong></a><br/>
					<span className="subtext">Pune, India</span>
					<ul className="subtext">
						<li>Designed and implemented a customizable data visualization dashboard framework in AngularJS, D3, and Python which provided rich data visualization widgets like charts, graphs, and tables in real-time.</li>
						<li>Worked in a fast-paced agile environment with a leading ed-tech startup - Edmodo Inc. San Mateo, USA, developing products and features for 70 million users.</li>
						<li>Architected and migrated the application to stable frameworks like BackboneJS and NodeJS from RendrJS framework which enhanced the performance by decreasing the initial load time by 90% and facilitated easy extension and maintenance.</li>
						<li>Led a team of 5 members for the migration project to successfully complete the effort in 8 weeks.</li>
					</ul>
				</div>
			</section>
		);
	}
}