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

class MedicalBillingCodingServices extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Medical Billing & Coding Services</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Medical Billing & Coding Services</li>
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
										<h3 className="title">Medical Billing & Coding Services</h3>
									</div>
									<p>
									Key MedSolutions is a medical billing company based in North Carolina, that provides comprehensive medical insurance billing and coding services to physician groups across the United States. Our skilled and experienced billing and coding professionals provide personalized solutions tailored to the specific needs of each client. We stay current with the latest regulations and guidelines, ensuring that our services are always compliant with HIPAA, ICD-10, and EHR "meaningful use" standards. We pride ourselves on our commitment to excellence and our reputation as a trusted and dependable partner in medical claims billing. Let us help you maximize the revenue of your practice and streamline your medical billing process. Contact us today to learn more.
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

export default MedicalBillingCodingServices;