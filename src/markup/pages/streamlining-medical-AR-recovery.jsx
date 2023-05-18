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

class StreamliningMedicalARRecovery extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h2>Streamlining Medical AR Recovery - Boosting Revenue Collection Promptly</h2>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Streamlining Medical AR Recovery - Boosting Revenue Collection Promptly</li>
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
										<h3 className="title">Streamlining Medical AR Recovery - Boosting Revenue Collection Promptly</h3>
									</div>
									<p>
									Maximizing medical AR recovery is a challenging task, especially in today's complex health insurance landscape. With evolving payer plans, patient co-pays, co-insurance agreements, and more patients opting for high deductible health plans, payment ambiguities and complexities have increased. Physicians require comprehensive strategies to minimize reimbursement issues and accelerate cash flow. Key MedSolutions provides end-to-end medical billing services for busy physicians, ensuring that net collections are realized to their fullest potential.
									</p>
									<p>
									It's common for physicians to face excessive amounts of medical A/R that are greater than 180 days outstanding, unless they initiate specific and consistent active accounts receivable follow-up on current billings. However, researching, correcting, appealing, and/or re-filing claims is a time-consuming process that requires expertise. With a limited number of staff devoted to this task, physicians may struggle to achieve their goal of substantially reducing/eliminating outstanding A/R and collecting as much money as possible in a short period of time.
                                    </p>
                                    <p>
									Key MedSolutions ensures that the outstanding A/R is reduced/eliminated, and physicians can focus on providing quality care to their patients.
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

export default StreamliningMedicalARRecovery;