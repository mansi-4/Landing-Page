import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
function Header() {
  return (
        <div>
            <div className="back-to-top"></div>

            <header>
                <Navbar/>

                <div className="page-banner home-banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    <div className="col-lg-6 py-3 wow fadeInUp">
                        <h1 className="mb-4">Great Business are built on great Products</h1>
                        <p className="text-lg mb-5">Unlock the potential of your business with our amazing services.</p>

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

export default Header;