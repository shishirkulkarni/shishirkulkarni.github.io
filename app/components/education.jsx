import React, {Component} from 'react';
import '../styles/education.css';

export default class Education extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="education separated">
				<div className="row">
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>Education</h2>
					</div>
				</div>
				<div className="row timeline">
					<div className="col-sm-11 col-md-11 col-lg-11 col-xs-10 milestone">
						<div className="dot"></div>
						<div className="description">
							<strong className="title">San Jose State University</strong> <br/>
							<span>MS, Computer Science</span><br/>
							<span>San Jose, CA, </span><span>CGPA: 3.9</span>
						</div>
					</div>

					<div className="col-sm-11 col-md-11 col-lg-11 col-xs-10 milestone">
						<div className="dot"></div>
						<div className="description">
							<strong className="title">University of Pune</strong><br/>
							<span>Bachelor of Engineering</span> <br/>
							<span>Pune, India</span>
						</div>
					</div>
				</div>
			</section>
		);
	}	
}