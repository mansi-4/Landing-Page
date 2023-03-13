import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-float">
                <div className="container">
                    <Link to="/" className="navbar-brand">OffineTo<span className="text-primary">Online</span></Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                        <li className="nav-item active">
                        <a href='/' className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a href="#clients" className="nav-link">Clients</a>
                        </li>
                        <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>

                    <div className="ml-auto">
                        <a href="#pricing" className="btn btn-outline rounded-pill">Get a Quote</a>
                    </div>
                    </div>
                </div>
                </nav>
  )
  }
export default Navbar;