import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Elements
// import AboutSection from "../elements/about";
// import LatestNewsSection from "../elements/latest-news-slider";
// import FeatureSection3 from "../elements/feature-section3";
// import TeamSection from "../elements/team";
// import TestimonialSection from "../elements/testimonial";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class AboutUs extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>About Us</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">About Us</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>

					<section>
						<div className="container">
							<div className="row justify-content-center">
								{/* <div className="col"></div> */}
								<div className="col-md-10">
									<div className="heading-bx text-center">
										<h3 className="title">Welcome to Key MedSolutions !</h3>
									</div>
									<p>
										Our company was founded with a passion for helping healthcare providers optimize their medical billing processes through outsourcing and Revenue Cycle Management (RCM) services. We understand that medical billing can be complex and time-consuming, which is why we've dedicated our services to providing efficient, reliable, and accurate outsourced medical billing and RCM solutions.
									</p>
									<p>
										At Key MedSolutions, we don't just see our clients as business partners, but as members of our extended family. We pride ourselves on building strong relationships with our clients, and we believe that trust, transparency, and communication are the foundation of any successful outsourcing partnership.
									</p>
									<p>
										Our team of experienced professionals is dedicated to delivering exceptional outsourced medical billing and RCM services that are tailored to meet the unique needs of our clients. We take a collaborative approach, working closely with our clients to identify their specific needs and goals, and developing customized solutions that achieve results.
									</p>
									<p>
										Our commitment to quality is reflected in everything we do. Our team of certified coders and billing specialists are highly skilled and knowledgeable in medical billing, outsourced medical billing, and RCM services, and we are constantly updating our skills and knowledge to stay abreast of the latest developments in the industry. We understand that the healthcare landscape is constantly evolving, which is why we are committed to staying ahead of the curve and adapting to changing industry standards and regulations.
									</p>
									<p>
										We are proud of the impact we've had on our clients' businesses, and we measure our success by their success. 
									</p>
									<p>
										Our mission and Vision is to help healthcare providers optimize their medical billing processes through outsourcing and RCM services, reduce costs, and maximize revenue. We believe that our outsourced medical billing and RCM services not only benefit our clients, but also help to improve patient outcomes by allowing healthcare providers to focus on what they do best - providing quality care.
									</p>
									<p>
										Thank you for considering Key MedSolutions for your outsourced medical billing and RCM needs. We look forward to building a long-term outsourcing partnership with you and helping you achieve your business goals. Please don't hesitate to contact us if you have any questions or would like to learn more about our medical billing, outsourced medical billing, and RCM services.
									</p>									
								</div>
								{/* <div className="col"></div> */}
							</div>
						</div>
					</section>
					
					
					{/* <AboutSection /> 
					
					<FeatureSection3 />
					
					<TeamSection />
					
					<TestimonialSection />
					
					<LatestNewsSection /> */}
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default AboutUs;