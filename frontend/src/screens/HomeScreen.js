import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import AboutUs from '../components/AboutUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Clients from '../components/Clients';
function Home(){
    return(
        <div>
            <Header/>
            <main>
                {/* our Products*/}
                <div id="Products">
                    <Products />
                </div>
                {/* about us*/}
                <div id="about">
                    <AboutUs/>
                </div>
                {/* pricing plan*/}
                <div id="pricing">
                    <Pricing/>
                </div>
                {/* testimonial*/}
                    {/* <Testimonials/> */}
                    
                {/* our clients */}
                <div id="clients">
                    <Clients/>
                </div>
                {/* contact us*/}
                <div id="contact">
                    <ContactUs/>
                </div>
            </main>
            <Footer/> 
        </div>
    )
}

export default Home;