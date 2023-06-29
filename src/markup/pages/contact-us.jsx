import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";

const ContactUs = ({contactUs}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	function handleSubmit(event) {
		axios({
			method: 'POST',
			url: '/api/mail',
			data: {
				name: name,
				email: email,
				phone: phone,
				message: message,
				redirectionUrl: `https://keymedsolution.com`,
				// time: time.toLocaleString('en-US'),
			
				attachments: [
				{
					// content: fileBase64,
					// filename: guestSelectedFile.name,
					// type: guestSelectedFile.type,
					disposition: "attachment"
				}
				]
			}
		})
	}
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Contact Us</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
					</div>
					
					<section className="">
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form 
											className="form-wraper contact-form ajax-form"
											onSubmit={handleSubmit}
										>
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input 
														name="form-name" 
														type="text" 
														required 
														className="form-control" 
														placeholder="Your Name" 
														value={name}
														onChange={(e) => {
															setName(e.target.value);
														}}
													/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"
														value={email}
														onChange={(e) => {
															setEmail(e.target.value);
														}}
													/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"
														value={phone}
														onChange={(e) => {
															setPhone(e.target.value);
														}}
													/>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Type Message"
														value={message}
														onChange={(e) => {
															setMessage(e.target.value);
													}}
													></textarea>
												</div>
												<div className="col-lg-12">
													<button 
														name="submit" 
														type="submit" 
														onClick={handleSubmit}
														value="Submit" 
														className="btn w-100 btn-secondary btn-lg">Submit</button>
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
													<p>Greensboro, North Carolina, USA</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
													<a href="mailto:info@keymedsolution.com" className="text-white">info@keymedsolution.com</a> <br></br>
													<a href="tel:+13364968296" className="text-white">+1 (336) 496-8296</a>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">
														<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"><i className="fab fa-facebook"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/key-medsolutions/"><i className="fab fa-linkedin"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/key_medsolution/"><i className="fab fa-instagram"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					{/* <section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature4">
										<div className="icon-md feature-icon">
											<img src={icon1} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Contact Number</h5>
											<p>+1 (336) 496-8296</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature3">
										<div className="icon-md feature-icon">
											<img src={icon3} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Email Address</h5>
											<p>info@keymedsolution.com</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature2">
										<div className="icon-md feature-icon">
											<img src={icon2} alt=""/>
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Address</h5>
											<p>Greensboro, North Carolina, USA</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}
				
				</div>
				
				<Footer />
				
			</>
		);
	
}

export default ContactUs;