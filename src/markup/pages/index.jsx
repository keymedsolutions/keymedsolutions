import React, {Component} from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import MedicalBillingServicesSection from '../elements/medical-billing-services';
import QuoteHome from '../elements/quote-home';

class Index extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<MainBannerSection />
				
				<WorkSection />
				
				<AboutSection />
				
				<MedicalBillingServicesSection />
				{/* <AppointmentSection /> */}
				
				{/* <ServicesSliderSection /> */}
				
				<TestimonialSection />
				
				{/* <LatestNewsSection /> */}

				<QuoteHome/>
				
				<Footer />
				
			</>
		);
	}
}

export default Index;