import React from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Services(){
    return(
        <div>
            <Navbar/>
            <main>
            <div className="page-section" style={{marginTop:"50px"}}>
                <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="subhead">Below products are built by industry experts Y-saas infotech</div>
                    <h2 className="title-section">Our Services</h2>
                    <div className="divider mx-auto"></div>
                    </div>
                    <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-lg-6 py-3 wow fadeInLeft">
                        <h2 className="title-section">Billing <span className="marked">Services</span></h2>
                        <div className="divider"></div>
                        <p className="mb-5">
                        Billing Services is a service designed for individual business owners who want to automate their billing 
                        process. It's a cost-effective option for those who don't want to invest in complex services. By choosing 
                        this service, individuals won't need to manually enter bill information, as our system will take care of it.
                         Our system allows you to store and track order information and share it as invoice.</p>
                        {/* <a href="#" className="btn btn-primary">More Details</a> */}
                        <Link to="/services" className="btn btn-primary border">&#8377; 999 / month</Link>

                    </div>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place text-center">
                        <img src=" assets/img/invoices.png" alt=""/>
                        </div>
                    </div>
                    </div>
                    <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place text-center">
                        <img src=" assets/img/inventory.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 py-3 wow fadeInLeft">
                        <h2 className="title-section">Inventory & Billing <span className="marked">Services</span></h2>
                        <div className="divider"></div>
                        <p className="mb-5">
                        Inventory Billing Services is designed for individual business owners who want to automate their inventory and 
                        billing process. By using this service, individuals can easily keep track of their shop's stock and the order
                        process will be fully dynamic. The owner won't need to manually change the product stock as it will be
                        automatically updated through the inventory feature. 
                        This service allows for easy management of products and orders and also allows for easy export of invoices.
                        </p>
                        {/* <a href="#" className="btn btn-primary">More Details</a> */}
                        <Link to="/services" className="btn btn-primary border">&#8377; 1999 / month</Link>
                    
                    </div>
                    </div>
                    <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-lg-6 py-3 wow fadeInLeft">
                        <h2 className="title-section">E-Commerce <span className="marked">Services</span></h2>
                        <div className="divider"></div>
                        <p className="mb-5">
                            E-Commerce Services are crucial in today's market to make your brand stand out. However, 
                        creating an e-commerce system can be costly and challenging for many individual business owners.
                         We offer an affordable e-commerce service with all the necessary features such as shopping cart,
                          checkout process, delivery tracking, Razorpay payment gateway, and complete admin panel to manage colors, 
                          sizes, categories, products, orders, and invoices.
                        </p>
                        {/* <a href="#" className="btn btn-primary">More Details</a> */}
                        <Link to="/services" className="btn btn-primary border">&#8377; 2999 / month</Link>

                    </div>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place text-center">
                        <img src=" assets/img/ecommerce.png" alt=""/>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place text-center">
                        <img src=" assets/img/premium.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 py-3 wow fadeInLeft">
                        <h2 className="title-section">Inventory, Billing & E-Commerce <span className="marked">Services</span></h2>
                        <div className="divider"></div>
                        <p className="mb-5">
                        Our premium service, Inventory, Billing & E-commerce, helps business owners establish their presence both 
                        online and offline using a single system. The E-commerce system allows end-users to place orders while the 
                        owner manages them. The same system can be used for offline customers, allowing the owner to manage inventory
                         and billing while also creating orders for offline customers.
                        </p>
                        {/* <a href="#" className="btn btn-primary">More Details</a> */}
                        <Link to="/services" className="btn btn-primary border">&#8377; 3999 / month</Link>
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