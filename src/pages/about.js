import React from 'react'
import Footer from './footer';
import Menu from './menu';

function About(){
    return(
        <div>
            <Menu/>
            <main>
                <div  className="page-section">
                <div  className="container">
                    <div  className="row align-items-center">
                    <div  className="col-lg-6 py-3">
                        <div  className="img-fluid text-center">
                        <img src="assets/img/bg_image_2.png" alt=""/>
                        </div>
                    </div>
                    <div  className="col-lg-6 py-3 pr-lg-5">
                        <h2  className="title-section">We're <span  className="marked">Dynamic</span> Team of Creatives People</h2>
                        <div  className="divider"></div>
                        <p>We provide marketing services to startups & small business to looking for partner for their digital media, design & dev lead generation & communication.</p>
                        <a href="#"  className="btn btn-primary">More Details</a>
                        <a href="#"  className="btn btn-outline border ml-2">Success Stories</a>
                    </div>
                    </div>
                </div> 
                </div> 

                <div  className="page-section counter-section">
                <div  className="container">
                    <div  className="row align-items-center text-center">
                    <div  className="col-lg-4">
                        <p>Total Invest</p>
                        <h2>$<span  className="number" data-number="816278"></span></h2>
                    </div>
                    <div  className="col-lg-4">
                        <p>Yearly Revenue</p>
                        <h2>$<span  className="number" data-number="216422"></span></h2>
                    </div>
                    <div  className="col-lg-4">
                        <p>Growth Ration</p>
                        <h2><span  className="number" data-number="73"></span>%</h2>
                    </div>
                    </div>
                </div> 
                </div> 
            
                {/* <!-- Testimonials --> */}
                <div  className="page-section bg-light">
                <div  className="container">
                    
                    <div  className="owl-carousel" id="testimonials">
                    <div  className="item">
                        <div  className="row align-items-center">
                        <div  className="col-md-6 py-3">
                            <div  className="testi-image">
                            <img src="assets/img/person/person_1.jpg" alt=""/>
                            </div>
                        </div>
                        <div  className="col-md-6 py-3">
                            <div  className="testi-content">
                            <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                            <div  className="entry-footer">
                                <strong>Melvin Platje</strong> &mdash; <span  className="text-grey">CEO Slurin Group</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    <div  className="item">
                        <div  className="row align-items-center">
                        <div  className="col-md-6 py-3">
                            <div  className="testi-image">
                            <img src="assets/img/person/person_2.jpg" alt=""/>
                            </div>
                        </div>
                        <div  className="col-md-6 py-3">
                            <div  className="testi-content">
                            <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                            <div  className="entry-footer">
                                <strong>George Burke</strong> &mdash; <span  className="text-grey">CEO Letro</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    </div>
                </div> 
                </div>
                
                <div  className="page-section client-section">
                <div  className="container-fluid">
                    <div  className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                    <div  className="item">
                        <img src="assets/img/clients/airbnb.png" alt=""/>
                    </div>
                    <div  className="item">
                        <img src="assets/img/clients/google.png" alt=""/>
                    </div>
                    <div  className="item">
                        <img src="assets/img/clients/stripe.png" alt=""/>
                    </div>
                    <div  className="item">
                        <img src="assets/img/clients/paypal.png" alt=""/>
                    </div>
                    <div  className="item">
                        <img src="assets/img/clients/mailchimp.png" alt=""/>
                    </div>
                    </div>
                </div>
                </div> 
            </main>

            <Footer/> 

        </div>
    )
}

export default About;