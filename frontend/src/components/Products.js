import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
        <div className="page-section features">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                    <img src=" assets/img/icon_pattern.svg" alt=""/>
                </div>
                <div>
                    <h5>BS</h5>
                    <p>Billing Services</p>
                </div>
                </div>
            </div>
    
            <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                    <img src=" assets/img/icon_pattern.svg" alt=""/>
                </div>
                <div>
                    <h5>IBS</h5>
                    <p>Inventory & Billing Services</p>
                </div>
                </div>
            </div>
    
            <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                    <img src=" assets/img/icon_pattern.svg" alt=""/>
                </div>
                <div>
                    <h5>ES</h5>
                    <p>E-Commerce Services</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                    <img src=" assets/img/icon_pattern.svg" alt=""/>
                </div>
                <div>
                    <h5>IBES</h5>
                    <p>Inventory, Billing & E-Commerce Services</p>
                </div>
                </div>
            </div>
            <div>
            <Link to="/services" className="btn btn-primary border ">Know More</Link>

            </div>
        </div>
        </div>
        </div>
            
  )
}

export default Services;