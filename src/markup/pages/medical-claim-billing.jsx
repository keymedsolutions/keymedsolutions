import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';

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

class MedicalClaimBilling extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Medical Claim Billing</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Medical claim Billing</li>
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
									
									<p>
                                    Medical billing can be overwhelming for physicians who are already juggling patient care and administrative tasks. Healthcare is a constantly evolving industry, and billing demands adherence to new compliance guidelines such as HIPAA 5010, ICD 10, and EHR "meaningful use" guidelines. At Key MedSolutions, we provide comprehensive medical claims billing and processing services to healthcare providers, freeing up valuable time for them to focus on their patients. Our experienced billing and coding specialists ensure accurate and timely processing of medical claims, patient invoicing and collections, and comprehensive revenue cycle management. By outsourcing their medical billing needs to us, physicians can achieve financial success while providing top-quality care to their patients. We work with our clients to develop customized solutions that streamline their billing processes and maximize revenue. At Key MedSolutions, we are dedicated to simplifying medical billing processes and helping healthcare providers stay up-to-date with the latest industry mandates.
									</p>
									<br/>
                                    <div className="heading-bx text-center">
										<h3 className="title">Why Choose Key MedSolutions for Your Medical Claims Billing?</h3>
									</div>

                                   <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-12">
                                                    <Table striped bordered hover>
                                                        <tbody>
                                                            <tr><td>Key MedSolutions offers comprehensive medical claims billing and processing services to healthcare providers.</td></tr>
                                                            <tr><td>The team consists of highly skilled and experienced billing and coding specialists who handle every aspect of billing and revenue cycle management.</td></tr>
                                                            <tr><td>Key MedSolutions provides customized solutions that streamline billing processes, maximize revenue, and improve the bottom line of healthcare providers.</td></tr>
                                                            <tr><td>Competitive pricing and flexible billing options are available to meet the unique needs of clients.</td></tr>
                                                            <tr><td>Key MedSolutions  dedication to excellence and commitment to clients has earned them a reputation as a trusted and reliable partner in medical claims billing.</td></tr>
                                                            <tr><td>By outsourcing medical billing needs to Key MedSolutions, healthcare providers can focus on providing top-quality care to their patients, while achieving financial success.</td></tr>
                                                        </tbody>
                                                    </Table>
                                                </div>								
                                            </div>
                                        </div>
									
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

export default MedicalClaimBilling;