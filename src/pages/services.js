import React from 'react'
import Footer from './footer';
import Menu from './menu';

function Services(){
    return(
        <div>
            <Menu/>

            <main>
                <div  className="page-section">
                <div  className="container">
                    <div  className="row">
                    <div  className="col-lg-6 py-3">
                        <h2  className="title-section">We're <span  className="marked">ready to</span> Serve you with best</h2>
                        <div  className="divider"></div>
                        <p  className="mb-5">We provide marketing services to startups & small business to looking for partner for their digital media, design & dev lead generation & communication.</p>
                        <a href="#"  className="btn btn-primary">More Details</a>
                        <a href="#"  className="btn btn-outline ml-2">See pricing</a>
                    </div>
                    <div  className="col-lg-6 py-3">
                        <div  className="img-place text-center">
                        <img src="assets/img/bg_image_3.png" alt=""/>
                        </div>
                    </div>
                    </div>
                </div> 
                </div> 
            
                <div  className="page-section">
                <div  className="container">
                    <div  className="text-center">
                    <div  className="subhead">Why Choose Us</div>
                    <h2  className="title-section">Your <span  className="marked">Comfort</span> is Our Priority</h2>
                    <div  className="divider mx-auto"></div>
                    </div>
            
                    <div  className="row mt-5 text-center">
                    <div  className="col-lg-4 py-3">
                        <div  className="display-3"><span  className="mai-shapes"></span></div>
                        <h5>High Performance</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                    <div  className="col-lg-4 py-3">
                        <div  className="display-3"><span  className="mai-shapes"></span></div>
                        <h5>Friendly Prices</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                    <div  className="col-lg-4 py-3">
                        <div  className="display-3"><span  className="mai-shapes"></span></div>
                        <h5>No time-confusing</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                    </div>
                </div> 
                </div> 
            </main>

            <Footer/>
        </div>
    )
}

export default Services;