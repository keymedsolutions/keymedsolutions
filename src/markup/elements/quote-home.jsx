import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


class QuoteHome extends Component{
	
	render(){
		return (
			<>
								
				<div className="page-content bg-white quote">
                        <div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>	
							<div className="heading-bx text-center">
								<h6 className="title-ext text-secondary">Looking for a Medical Billing Quote?</h6>
								{/* <h2 className="title">Work smoothly with any in- House software you have</h2> */}
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
						<section className="">
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form className="form-wraper contact-form ajax-form">
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Your Name"/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"/>
												</div>
												<div className="form-group col-md-12">
													<select className="form-select form-control">
														<option value="0">Type here to select the state</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
												</div>
												<div className="form-group col-md-12">
													<select className="form-select form-control">
														<option value="0">Type here to select the Specialty</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
												</div>
												<div className="form-group col-md-12">
													<input name="timeToCall" type="text" required className="form-control" placeholder="Best time to Call"/>
												</div>
												<div className="form-group col-md-12">
													<input name="price" type="text" required className="form-control" placeholder="Price"/>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Please briefly describe your requirements"></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Request Quote</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6 mb-30">
										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
											<div className="info-inner">
												<h4 className="title mb-30">Contact Us For Any Informations</h4>
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
													<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
													<Link to="#" className="text-white">info@yourdomain.com</Link>
													<p>(+68) 120034509</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">
														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>					
					
				
				</div>
								
			</>
		);
	}
}

export default QuoteHome;