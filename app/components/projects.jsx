import React, {Component} from 'react';
import '../styles/projects.css';

export default class Projects extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="projects separated">
				<div className="row">
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>Projects</h2>
					</div>
				</div>
				<div className="row timeline">
					<div className="col-sm-11 col-md-11 col-lg-11 col-xs-10 milestone">
						<div className="dot"></div>
						<div className="description">
							<a className="title" href="https://github.com/shishirkulkarni/happypatients" target="_blank"><strong>Happy Patients Hospital</strong></a> <br/>
							<ul className="subtext">
								<li>Designed a hospital management system using to understand the working of various distributed systems.</li>
								<li>Tech Stack: Jersy, Cassandra, Redis, ActiveMQ, Docker</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-11 col-md-11 col-lg-11 col-xs-10 milestone">
						<div className="dot"></div>
						<div className="description">
							<a className="title" href="https://github.com/shishirkulkarni/apriori" target="_blank"><strong>Apriori Algorithm</strong></a><br/>
							<ul className="subtext">
								<li>Successfully implemented the Apriori Algorithm in Java and used it to devise association rules in the transactional dataset of retail stores</li>
								<li>Implemented a recommendation system using generated association rules and social network graphs</li>
								<li>Tech Stack: Maven, Java, Guava libraries</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}	
}