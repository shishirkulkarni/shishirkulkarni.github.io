import React, {Component} from 'react';
import Slider from 'react-slick';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/testimonials.css';
import { Carousel } from 'react-responsive-carousel'


export default class Testimonials extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="testimonials">
				<div className="container">
					<div className="row">
						<div className="title col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h2>Testimonials</h2>
							</div>
						</div>
					</div>
				<section className="container">
					<Carousel
					showIndicators= {false}
					infiniteLoop = {true}
					autoPlay = {true}
					showStatus = {false}
					interval = {15000}>
						<div>
							<p>
								I worked with Shishir for few months with GS Labs contracting for Edmodo. In a short time Shishir was able to pick up the new framework we were migrating the code to and played a key role in writing the base application required for this project. He is hardworking, technically good at what he does and likes working with the technology - thats a hard combination to find. I would highly recommend Shishir!
							</p>
							<br/>
							<strong>Vinayak Kadu, </strong><span>Associate Technical Manager, GS Lab Pvt Ltd</span>

						</div>
						<div>
							<p>
								When I joined GS Lab, Shishir was my teammate and his previous manager Viraj has given me a lot of good words about him, however I could only believe them only after We started to work together. With no surprises Shishir demonstrated all his qualities observed by Viraj in a short period of time we held together. Shishir has demonstrated technical abilities which you can not expect from a newbie into IT, his mastery over Javascript frameworks really stunned me, I have seen him work greatly with very senior developers and contribute in highly collaborative manner which is a very desired skill to have. He was highly committed to his work and have always delivered desired results whether it was challenging or a regular task. All in all Shisir is a complete package with a great balance between Technical Mastery and a Great Teammate which any Manager would love to have. I definitely recommend Shishir!
							</p>
							<br/>
							<strong>Aditya Khurana, </strong><span>Tech Lead, Edmodo Inc.</span>
						</div>
					</Carousel>
				</section>
			</div>
		);
	}
}