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
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';

class OurSpecialities extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Our Specialities</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Our Specialities</li>
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
										<h3 className="title">Specialties We Serve</h3>
									</div>
									
									<section className="section-area work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:"repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
										<div className="container-xl">
											
											<div className="row justify-content-center btn-group">
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Allergy and Immunology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Ambulance Transportation</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Ambulatory Surgical Centers</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Anesthesiology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Behavioral Health</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Cardiology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Chiropractic</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Dental</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Dermatology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Durable Medical Equipment</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Emergency Medicine Billing</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Family Practice</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Gastroenterology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>General Surgery</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Hospitalist Billing</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Internal Medicine</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Massage Therapy</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Mental Health</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Neurology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>OB Gyn</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Occupational Health</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Oncology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Optometry</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Oral and Maxillofacia</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Orthopedic</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Otolaryngology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Pain Management</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Pathology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Pediatrics</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Pharmacy Billing</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Physical Therapy</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Plastic Surgery</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Podiatry</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Primary Care</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Pulmonology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Radiation Oncology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Radiology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Rehab Billing</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Rheumatology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Skilled Nursing Facility</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Sleep Disorder</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Sports Medicine</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Teleradiology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Urology</h6>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 mb-30">
													<div className="work-bx" style={{width: "220px"}}>
														<h6 className='mb-0'>Wound Care</h6>
													</div>
												</div>
											</div>
										</div>
										<img className="pt-img1 animate1" src={ptImg1} alt=""/>
										<img className="pt-img2 animate2" src={ptImg2} alt=""/>
										<img className="pt-img3 animate3" src={ptImg3} alt=""/>
									</section>

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

export default OurSpecialities;