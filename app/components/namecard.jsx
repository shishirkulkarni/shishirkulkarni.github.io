import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/namecard.css';
import profile_pic from '../images/profile_pic.jpg';
import '../../node_modules/socicon/css/socicon.css';


export default class NameCard extends Component {

	constructor() {
		super();
		this.state = {
			profilePicStyle: {
				backgroundImage: `url(${profile_pic})`,
				backgroundSize: 'cover',
				borderRadius: "50%"
			}
		};
	}

	render() {
		return(
			<section className="namecard-container jumbotron jumbotron-fluid separated">
				<div className="namecard text-center">
					<div className="profile-pic" style={this.state.profilePicStyle}></div>
					<h1>Shishir Kulkarni</h1>
					<p>Eat. Sleep. Code. Repeat...</p>
						<div className="row icon-container">
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
								<a href="mailto:shishir.kulkarni.2307@gmail.com">
									<span className="icons socicon-mail"></span>
								</a>
							</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<a href="https://github.com/shishirkulkarni/" target="_blank">
									<span className="icons socicon-github"> </span>
								</a>
							</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<a href="https://linkedin.com/in/kulkarnishishir/" target="_blank">
									<span className="icons socicon-linkedin"> </span>
								</a>
							</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<a href="skype:live:spk2307?action=chat"><span className="icons socicon-skype"></span></a>
							</div>
							<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
								<a href="telephone:19379869990"><span className="icons glyphicon glyphicon-earphone"></span></a>
							</div>
						</div>
				</div>
			</section>
		);
	}
}