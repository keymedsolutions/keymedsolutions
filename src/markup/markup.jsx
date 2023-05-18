import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import PhysicianBillingServices from './pages/physician-billing-services';
import MedicalClaimBilling from './pages/medical-claim-billing';
import InternalMedicineAndNephrologyBillingServices from './pages/internal-medicine-and-nephrology-billing-service';
import RadiologyBillingServices from './pages/radiology-billing-services';
import CardiologyMedicalBilling from './pages/cardiology-medical-billing';
import ImprovingYourFinancialHealthWithProfitEnhancementServices from './pages/improving-your-financial-health-with-profit-enhancement-services';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter>
				
					<Switch>
					
						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} />
						<Route path='/team' exact component={Team} />
						<Route path='/services' exact component={Services} />
						<Route path='/service-detail' exact component={ServiceDetail} />
						<Route path='/form-login' exact component={FormLogin} />
						<Route path='/form-register' exact component={FormRegister} />
						<Route path='/form-forget-password' exact component={FormForgetPassword} />
						<Route path='/faq' exact component={Faq} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-details' exact component={BlogDetails} />
						<Route path='/physician-billing-services' exact component={PhysicianBillingServices} />
						<Route path='/medical-claim-billing' exact component={MedicalClaimBilling} />	
						<Route path='/internal-medicine-and-nephrology-billing-service' exact component={InternalMedicineAndNephrologyBillingServices} />	
						<Route path='/radiology-billing-services' exact component={RadiologyBillingServices} />
						<Route path='/cardiology-medical-billing' exact component={CardiologyMedicalBilling} />
						<Route path='/improving-your-financial-health-with-profit-enhancement-services' exact component={ImprovingYourFinancialHealthWithProfitEnhancementServices} />
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;