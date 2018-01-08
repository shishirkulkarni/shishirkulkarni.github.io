import React, {Component} from 'react';
import '../../node_modules/socicon/css/socicon.css';
import '../styles/footer.css';

export default class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<footer className="footer-container text-center subtext">
				Shishir Kulkarni ©2018
			</footer>
		);
	}
}