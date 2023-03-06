import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
        <div>
            <div className="back-to-top"></div>

            <header>
                <nav className="navbar navbar-expand-lg navbar-light navbar-float">
                <div className="container">
                    <Link to="/" className="navbar-brand">Offine2<span className="text-primary">Online.</span></Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                        <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/blog" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>

                    <div className="ml-auto">
                        <a href="#" className="btn btn-outline rounded-pill">Get a Quote</a>
                    </div>
                    </div>
                </div>
                </nav>

                <div className="page-banner home-banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    <div className="col-lg-6 py-3 wow fadeInUp">
                        <h1 className="mb-4">Great Business are built on great ECommerce Products</h1>
                        <p className="text-lg mb-5">Unlock the potential of your business with an online presence</p>

                        <a href="#" className="btn btn-outline border text-secondary">More Info</a>
                        <a href="#" className="btn btn-primary btn-split ml-2">Watch Video <div className="fab"><span className="mai-play"></span></div></a>
                    </div>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place">
                        <img src=" assets/img/bg_image_1.png" alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
            
  )
}

export default Menu;