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
import Error from './pages/error-404';
import PhysicianBillingServices from './pages/physician-billing-services';
import MedicalClaimBilling from './pages/medical-claim-billing';
import InternalMedicineAndNephrologyBillingServices from './pages/internal-medicine-and-nephrology-billing-service';
import RadiologyBillingServices from './pages/radiology-billing-services';
import CardiologyMedicalBilling from './pages/cardiology-medical-billing';
import ImprovingYourFinancialHealthWithProfitEnhancementServices from './pages/improving-your-financial-health-with-profit-enhancement-services';
import ICD10MedicalCoding from './pages/ICD-10-medical-coding';
import MedicalBillingCodingServices from './pages/medical-billing-coding-services';
import MaximizeYourReimbursementRateWithOurMedicalBillingAndCollectionServices from './pages/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services';
import StreamliningMedicalARRecovery from './pages/streamlining-medical-AR-recovery';
import PracticeManagement from './pages/practice-management';
import VerificationOfHealthcareInsuranceEligibility from './pages/verification-of-healthcare-insurance-eligibility';
import RevenueCycleManagementCompany from './pages/revenue-cycle-management-company';
import DenialManagementServices from './pages/denial-management-service';
import PhysicianCredentialing from './pages/physician-credentialing';
import OurSpecialities from './pages/our-specialities';
import BlogDetails1 from './pages/blog-details-1';
import BlogDetails2 from './pages/blog-details-2';
import handler from './pages/api/mail';

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
						<Route path='/api/mail'  />
						<Route path='/booking' exact component={Booking} />
						<Route path='/blogs' exact component={BlogGrid} />
						<Route path='/blog-details-1' exact component={BlogDetails1} />
						<Route path='/blog-details-2' exact component={BlogDetails2} />
						<Route path='/physician-billing-services' exact component={PhysicianBillingServices} />
						<Route path='/medical-claim-billing' exact component={MedicalClaimBilling} />	
						<Route path='/internal-medicine-and-nephrology-billing-service' exact component={InternalMedicineAndNephrologyBillingServices} />	
						<Route path='/radiology-billing-services' exact component={RadiologyBillingServices} />
						<Route path='/cardiology-medical-billing' exact component={CardiologyMedicalBilling} />
						<Route path='/improving-your-financial-health-with-profit-enhancement-services' exact component={ImprovingYourFinancialHealthWithProfitEnhancementServices} />
						<Route path='/medical-billing-coding-services' exact component={MedicalBillingCodingServices} />
						<Route path='/ICD-10-medical-coding' exact component={ICD10MedicalCoding} />
						<Route path='/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services' exact component={MaximizeYourReimbursementRateWithOurMedicalBillingAndCollectionServices} />
						<Route path='/streamlining-medical-AR-recovery' exact component={StreamliningMedicalARRecovery} />
						<Route path='/practice-management' exact component={PracticeManagement} />
						<Route path='/verification-of-healthcare-insurance-eligibility' exact component={VerificationOfHealthcareInsuranceEligibility} />
						<Route path='/revenue-cycle-management-company' exact component={RevenueCycleManagementCompany} />
						<Route path='/denial-management-service' exact component={DenialManagementServices} />
						<Route path='/physician-credentialing' exact component={PhysicianCredentialing} />
						<Route path='/our-specialities' exact component={OurSpecialities} />
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