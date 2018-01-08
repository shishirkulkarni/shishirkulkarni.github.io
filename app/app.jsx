import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NameCard from './components/namecard.jsx';
import Education from './components/education.jsx';
import Projects from './components/projects.jsx';
import Testimonials from './components/testimonials.jsx';
import Footer from './components/footer.jsx';
import Skills from './components/skills.jsx';
import Experience from './components/experience.jsx';
import './styles/app.css';
import 'typeface-league-spartan';
import './fonts/spartan.css';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<NameCard />
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<Education />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<Projects />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<Experience />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<Skills />
						</div>
					</div>
				</div>
				<Testimonials />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app-container"));
