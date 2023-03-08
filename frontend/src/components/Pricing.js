import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
    <div className="page-section">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                    <h2 className="title-section">Pricing Plan</h2>
                    <div className="divider mx-auto"></div>
                    </div>
            
                    <div className="row justify-content-center">
                    <div className="col-12 col-lg-3 py-3 wow fadeInLeft">
                        <div className="card-pricing">
                        <div className="header">
                            <div className="price-icon"><span className="mai-shield-checkmark"></span></div>
                            <div className="price-title">Starter</div>
                        </div>
                        <div className="body py-3">
                            <div className="price-tag">
                            <span className="currency">&#8377;</span>
                            <h2 className="display-4">999</h2>
                            <span className="period">/monthly</span>
                            </div>
                            <div className="price-info">
                            <p>Billing Services</p>
                            </div>
                        </div>
                        <div className="footer">
                            <a href="#contact" className="btn btn-outline rounded-pill">Choose Plan</a>
                        </div>
                        </div>
                    </div>
            
            
                    <div className="col-12 col-lg-3 py-3 wow fadeInRight">
                        <div className="card-pricing">
                        <div className="header">
                            <div className="price-icon"><span className="mai-rocket-outline"></span></div>
                            <div className="price-title">Basic</div>
                        </div>
                        <div className="body py-3">
                            <div className="price-tag">
                            <span className="currency">&#8377;</span>
                            <h2 className="display-4">1999</h2>
                            <span className="period">/monthly</span>
                            </div>
                            <div className="price-info">
                            <p>Inventory & Billing Services</p>
                            </div>
                        </div>
                        <div className="footer">
                            <a href="#contact" className="btn btn-outline rounded-pill">Choose Plan</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 py-3 wow fadeInRight">
                        <div className="card-pricing">
                        <div className="header">
                            <div className="price-icon"><span className="mai-star"></span></div>
                            <div className="price-title">Standard</div>
                        </div>
                        <div className="body py-3">
                            <div className="price-tag">
                            <span className="currency">&#8377;</span>
                            <h2 className="display-4">2999</h2>
                            <span className="period">/monthly</span>
                            </div>
                            <div className="price-info">
                            <p>E-Commerce Services</p>
                            </div>
                        </div>
                        <div className="footer">
                            <a href="#contact" className="btn btn-outline rounded-pill">Choose Plan</a>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-3 py-3 wow fadeInUp">
                        <div className="card-pricing active">
                        <div className="header">
                            <div className="price-labled">Best</div>
                            <div className="price-icon"><span className="mai-bonfire-outline"></span></div>
                            <div className="price-title">Premium</div>
                        </div>
                        <div className="body py-3">
                            <div className="price-tag">
                            <span className="currency">&#8377;</span>
                            <h2 className="display-4">3999</h2>
                            <span className="period">/monthly</span>
                            </div>
                            <div className="price-info">
                            <p>Inventory, Billing & E-Commerce Services</p>
                            </div>
                        </div>
                        <div className="footer">
                            <a href="#contact" className="btn btn-outline rounded-pill">Choose Plan</a>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
    </>
  )
}

export default Pricing;