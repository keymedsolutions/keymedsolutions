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

class PhysicianCredentialing extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Physician Credentialing</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Physician Credentialing</li>
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
										<h3 className="title">Physician Credentialing</h3>
									</div>
									<p>
									At Key MedSolutions (KMS), our team of experienced billers are well-versed in the intricacies of getting physicians enrolled in new networks and payers, and can expedite the process of credentialing with government agencies. They have the necessary contacts and market knowledge to negotiate the best rates for your practice and ensure that you are getting paid what you are worth.									
									</p>
									<h5>
									Payer Contracting,Evaluation, and Renegotiation
									</h5>
									<p>
									In addition, our billers can help with payer contracting, evaluation, and renegotiation, which is a critical aspect of revenue cycle management. Many practices only set up their contracts once and allow them to automatically renew without any negotiations, which means they may be missing out on substantial revenue. Our billers can assist with evaluating and renegotiating your payer contracts on an annual basis, providing quantifiable results that directly impact your bottom line.                                    
									</p>
									<h5>
									Annual Credentialing Maintenance
									</h5>
                                    <p>
									Our billers also specialize in annual credentialing maintenance for nurse practitioners and physician assistants, ensuring that you are able to bill for all members of your team without any issues. They are experts in handling the complexity of Medicare enrollment services, which can be time-consuming and costly with other services.
                                    </p>
									<p>
									Let our billers handle these important tasks, allowing you to focus on your practice and providing the best possible care to your patients.
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

export default PhysicianCredentialing;