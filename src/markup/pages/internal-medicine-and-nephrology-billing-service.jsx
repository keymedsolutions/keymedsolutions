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

class InternalMedicineAndNephrologyBillingServices extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white aboutus">					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Internal medicine and nephrology billing services</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Internal medicine and nephrology billing services</li>
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
										<h3 className="title">Internal medicine and nephrology billing services</h3>
									</div>
									<p>
                                    Internal medicine and nephrology billing services involve the billing and coding of services provided by internal medicine and nephrology practices, including diagnosis, treatment, and management of a range of conditions. Accurately billing and coding for these services can be complex, and errors can result in delayed or denied payments from insurance companies.
									</p>
									<p>
                                    That's where internal medicine and nephrology billing services come in. These services specialize in managing the billing and coding process for internal medicine and nephrology practices, ensuring that claims are filed correctly and payments are received in a timely manner. Key MedSolutions offers internal medicine and nephrology billing services, with a team of experienced professionals who are well-versed in the unique requirements of these specialties. They can handle everything from claim submissions to follow-up on unpaid claims, freeing up time for practices to focus on patient care.
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

export default InternalMedicineAndNephrologyBillingServices;