import React, {Component} from 'react';
import '../styles/skills.css';
import '../../node_modules/devicon/devicon.min.css';

export default class Skills extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="skills separated">
				<div className="row">
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h2>Skills</h2>
					</div>
				</div>
				<div className="row values">
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong> Languages </strong>
					</div>
					<div className="languages col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-javascript-plain pull-left" title="Javascript"></span>
						<span className="devicon devicon-c-plain pull-left" title="C"></span>
						<span className="devicon devicon-java-plain-wordmark pull-left" title="Java"></span>
						<span className="devicon devicon-python-plain-wordmark pull-left" title="Python"></span>
						<span className="devicon devicon-go-plain pull-left" title="Go"></span>
						<span className="devicon devicon-cplusplus-plain pull-left" title="C++"></span>
					</div>
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong> Frameworks and Technologies </strong>
					</div>
					<div className="frameworks col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-html5-plain pull-left" title="HTML"></span>
						<span className="devicon devicon-css3-plain pull-left" title="CSS"></span>
						<span className="devicon devicon-bootstrap-plain pull-left" title="Bootstrap"></span>
						<span className="devicon devicon-less-plain-wordmark pull-left" title="Less"></span>
						<span className="devicon devicon-backbonejs-plain pull-left" title="Backbone JS"></span>
						<span className="devicon devicon-jquery-plain pull-left" title="JQuery"></span>
						<span className="devicon devicon-nodejs-plain pull-left" title="Node JS"></span>
						<span className="devicon devicon-express-plain pull-left" title="Express JS"></span>
						<span className="devicon devicon-react-original pull-left" title="React JS"></span>
						<span className="devicon devicon-angularjs-plain pull-left" title="Angular JS"></span>
						<span className="devicon devicon-django-plain pull-left" title="Django"></span>
					</div>
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong>Databases</strong>
					</div>
					<div className="frameworks col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-mysql-plain pull-left" title="MySQL"></span>
					</div>
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong>Servers</strong>
					</div>
					<div className="frameworks col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-nginx-original pull-left" title="Nginx"></span>
						<span className="devicon devicon-tomcat-original pull-left" title="Tomcat"></span>
					</div>
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong>Tools</strong>
					</div>
					<div className="frameworks col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-git-plain pull-left" title="Git and Github"></span>
						<span className="devicon devicon-webpack-plain pull-left" title="Webpack"></span>
						<span className="devicon devicon-babel-plain pull-left" title="Babel"></span>
						<span className="devicon devicon-grunt-plain pull-left" title="Grunt"></span>
						<span className="devicon devicon-bower-plain pull-left" title="Bower"></span>
						<span className="devicon devicon-docker-plain pull-left" title="Docker"></span>
						<span className="devicon devicon-redis-plain pull-left" title="Redis"></span>
						<span className="devicon devicon-amazonwebservices-original pull-left" title="AWS"></span>
					</div>
					<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<strong>Platforms</strong>
					</div>
					<div className="frameworks col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="devicon devicon-linux-plain pull-left" title="Linux"></span>
						<span className="devicon devicon-windows8-plain pull-left" title="Windows"></span>
					</div>
				</div>
			</div>
		);
	}
}