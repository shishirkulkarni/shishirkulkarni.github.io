import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

export default class Navbar extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" id="name">Shishir Kulkarni</a>
					</div>
					<ul className="nav navbar-nav">
						<li><a>Experience</a></li>
						<li><a>Education</a></li>
						<li><a>Skills</a></li>
						<li><a>Contact</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}