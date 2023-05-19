import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
// import logoWhite from '../../images/logo-white.png';
// import keymedSolution from '../../images/key-medsolutions.svg'

class Header extends Component{
	
	componentDidMount() {
		
		// Search Form Popup
		// var searchBtn = document.getElementById("quikSearchBtn")
        // var searchForm = document.querySelector(".nav-search-bar")
        // var closeBtn = document.getElementById("searchRemove")
		
        // searchBtn.addEventListener('click',function(){
        //     searchForm.classList.add("show")
        // })

        // closeBtn.addEventListener('click',function(){
        //     searchForm.classList.remove("show")
        // })
		
		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click',function(){
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click',function(){
			menuLinks.classList.remove("show")
		})
		
		// Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
            } else{
                current.classList.add('open');
            }
        }
    }
	
	render(){
		return(
			<>
				<header className="header header-transparent rs-nav">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								<div className="menu-logo logo-dark">
									<Link to="/"><img src={logo} alt=""/></Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								<div className="secondary-menu">
									<ul>
										{/* <li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i className="las la-search"></i></button></li> */}
										<li className="num-bx"><a href="tel:+13364968296"><i className="fas fa-phone-alt"></i> +1 (336) 496-8296</a></li>
										<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
									</ul>
								</div>
								<div className="menu-links navbar-collapse collapse justify-content-center" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about-us"><span>About Us</span></Link></li>
										<li>
											<Link to="#">Services</Link>
											<ul className="sub-menu lg-menu">												
												<li>
													<Link to="/physician-billing-services"><span>Physician Billing Services</span></Link>
													<ul className="sub-menu md-menu">												
														<li><Link to="/medical-claim-billing"><span>Medical claim Billing</span></Link></li>
														<li><Link to="/internal-medicine-and-nephrology-billing-service"><span>Internal medicine and nephrology billing services</span></Link></li>
														<li><Link to="/radiology-billing-services"><span>Radiology billing services</span></Link></li>
														<li><Link to="/cardiology-medical-billing"><span>Cardiology medical billing</span></Link></li>														
													</ul>
												</li>
												<li><Link to="/improving-your-financial-health-with-profit-enhancement-services"><span>Improving Your Financial Health with Profit Enhancement Services</span></Link></li>
												<li>
													<Link to="/medical-billing-coding-services"><span>Medical Billing & Coding Services</span></Link>
													<ul className="sub-menu md-menu">												
														<li><Link to="/ICD-10-medical-coding"><span>ICD-10 medical coding</span></Link></li>
													</ul>
												</li>
												<li><Link to="/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services"><span>Maximize Your Reimbursement Rate with Our Medical Billing and Collection Services</span></Link></li>
												<li><Link to="/streamlining-medical-AR-recovery"><span>Streamlining Medical AR Recovery - Boosting Revenue Collection Promptly</span></Link></li>
												<li><Link to="/practice-management"><span>Practice Management</span></Link></li>
												<li><Link to="/verification-of-healthcare-insurance-eligibility"><span>Verification of healthcare insurance eligibility</span></Link></li>
												<li><Link to="/revenue-cycle-management-company"><span>Revenue Cycle Management Company (RCM)</span></Link></li>
												<li><Link to="/denial-management-service"><span>Denial Management Services</span></Link></li>
												<li><Link to="/physician-credentialing"><span>Physician Credentialing</span></Link></li>
											</ul>										
										</li>
										<li><Link to="/our-specialities"><span>Our Specialties</span></Link></li>
										{/* <li><Link to="/blog"><span>Blog</span></Link></li>
										<li>
											<Link to="#">Contact Us</Link>
											<ul className="sub-menu">												
												<li><Link to="/service-detail"><span>Submit Inquiry</span></Link></li>
												<li><Link to="/service-detail"><span>Job Opportunities</span></Link></li>
												<li><Link to="/service-detail"><span>Location</span></Link></li>												
											</ul>										
										</li> */}
										{/* <li>
											<Link to="#">Pages <i className="fas fa-plus"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="/about-us"><span>About Us</span></Link></li>
														<li><Link to="/team"><span>Our Team</span></Link></li>
														<li><Link to="/faq"><span>FAQ's</span></Link></li>
														<li><Link to="/booking"><span>Booking</span></Link></li>
														<li><Link to="/error-404"><span>Error 404</span></Link></li>
														<li><Link to="/form-login"><span>Login / Register</span></Link></li>
													</ul>
												</li>
											</ul>
										</li> */}
										{/* <li>
											<Link to="#">Services <i className="fas fa-plus"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li>
															<Link to="/services"><span>Service</span> </Link>
															<Link to="#">Services</Link>
															<ul className="sub-menu">
																<li className="add-menu-left">
																	<ul>
																		<li>
																			<Link to="/services"><span>Service</span> </Link>
																			<ul className="sub-menu">
																				<li className="add-menu-left">
																					<ul>
																						<li><Link to="/services"><span>Service123</span> </Link></li>
																						<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
																					</ul>
																				</li>
																			</ul>
																		</li>
																		<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
																	</ul>
																</li>
															</ul>
														</li>
														<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
													</ul>
												</li>
											</ul>
										</li> */}
										{/* <li><Link to="#">Blog <i className="fas fa-plus"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
												<li><Link to="/blog-details"><span>Blog Details</span></Link></li>
											</ul>
										</li> */}
										{/* <li><Link to="/contact-us">Contact Us</Link></li> */}
									</ul>
									<ul className="social-media">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
					<div className="nav-search-bar">
						<form>
							<input type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="searchRemove"><i className="ti-close"></i></span>
					</div>
				</header>
				
			</>
		);
	}
}

export default Header;
