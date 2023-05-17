import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';
import chiroTouch from '../../images/chirotouch.png';
import kareo from '../../images/kareo.png';
import AdvancedMd from '../../images/AdvancedMD.png';
import athena from '../../images/athena.png';
import drchrono from '../../images/drchrono.png'
import eClinicWorks from '../../images/eclinicalworks.svg'
import epic from '../../images/epic.png'
import officeAlly from '../../images/officeAlly.png'
import practiceSuite from '../../images/practicesuite.png'


class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					<div className="container-xl">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Platforms of Technology</h6>
							<h2 className="title">Work smoothly with any in- House software you have</h2>
						</div>
						<div className="row justify-content-center btn-group">
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									{/* <div className="work-num-bx">01</div> */}
									<div className="work-content">
										{/* <h5 className="title text-secondary mb-10">Chiro Touch</h5> */}
										<img src={chiroTouch} alt=""/>
										{/* <p>It is a long established fact that a reader will be distracted by the readable content of.</p> */}
									</div>
									{/* <Link to="/booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link> */}
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									{/* <div className="work-num-bx">02</div> */}
									<div className="work-content">
										{/* <h5 className="title text-secondary mb-10">Take Treatment</h5> */}
										<img src={kareo} alt=""/>
										{/* <p>It is a long established fact that a reader will be distracted by the readable content of.</p> */}
									</div>
									{/* <Link to="/services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link> */}
								</div>
							</div>						
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={eClinicWorks} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={practiceSuite} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={officeAlly} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={athena} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={AdvancedMd} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={epic} alt=""/>
									</div>								
								</div>
							</div>
							<div className="col-lg-2 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-content">
										<img src={drchrono} alt=""/>
									</div>								
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;