import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
    <div className="page-section">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
            <img src=" assets/img/bg_image_2.png" alt=""/>
            </div>
        </div>
        <div className="col-lg-6 py-3 wow fadeInRight">
            <h2 className="title-section">We're <span className="marked">Unbeatable</span> Team of Creatives People</h2>
            <div className="divider"></div>
            <p>Welcome to OfflineToOnline! We are passionate about helping our customers seamlessly manage their business online.
                 Our services are designed to simplify the billing process, manage inventory, and enhance customer experience.</p>
            {/* <div className="img-place mb-3"> */}
            {/* <img src=" assets/img/testi_image.png" alt=""/> */}
            {/* </div> */}
            <a href="#clients" className="btn btn-primary border ">Success Stories</a>
        </div>
        </div>
    </div>
    </div>
    

    <div className="page-section">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">We're <span className="marked">ready to</span> Serve you with best</h2>
            <div className="divider"></div>
            <p className="mb-5">We understand the importance of running a successful online business. With our services, 
            we provide business owners with the tools
             necessary to streamline operations, boost sales, and ultimately succeed in the competitive online marketplace.</p>
            {/* <a href="#" className="btn btn-primary">More Details</a> */}
            <a href="#pricing" className="btn btn-primary border">See pricing</a>
        </div>
        <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
            <img src=" assets/img/bg_image_3.png" alt=""/>
            </div>
        </div>
        </div>
    </div>
    </div>
    

    <div className="page-section">
    <div className="container">
        <div className="text-center wow fadeInUp">
        <div className="subhead">Why Choose Us</div>
        <h2 className="title-section">Your <span className="marked">Comfort</span> is Our Priority</h2>
        <div className="divider mx-auto"></div>
        </div>

        <div className="row mt-5 text-center">
        <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="display-3"><span className="mai-shapes"></span></div>
            <h5>Quality</h5>
            <p>Premium quality services with exceptional performance and durability.</p>
        </div>
        <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="display-3"><span className="mai-shapes"></span></div>
            <h5>Friendly Prices</h5>
            <p>Affordable and budget-friendly service pricing.</p>
        </div>
        <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="display-3"><span className="mai-shapes"></span></div>
            <h5>Easy to Use</h5>
            <p>Intuitive and user-friendly product design for effortless navigation and operation.</p>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs;