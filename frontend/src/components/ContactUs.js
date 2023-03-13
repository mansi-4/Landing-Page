import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createContact } from '../actions/contactActions'
import Loader from "../components/Loader"
import Message from "../components/Message"
import { CONTACT_ADD_RESET } from '../constants/contactConstants'
function ContactUs() {
    const dispatch=useDispatch()
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [message,setMessage] =useState('')
    const [custom,setCustom]=useState('')

    const contactCreate = useSelector(state => state.contactCreate)
    const { contact, loading,error, success } = contactCreate
    useEffect(() => {
        if(success){
            setName('')
            setEmail('')
            setMessage('')
            dispatch({type:CONTACT_ADD_RESET})
        }
    },[success,error,loading])
    function submitHandler(e){
        e.preventDefault()
        dispatch(createContact({
            name:name,
            email:email,
            message:message
        }))
    }
  return (
    <>
    <div className="page-section">
    <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Get in Touch</h2>
            <div className="divider"></div>
            <p>We invites individuals to reach out to us,<br/>for any questions, comments, or concerns they may have!</p>

            <ul className="contact-list">
            {/* <li>
                <div className="icon"><span className="mai-map"></span></div>
                <div className="content">123 Fake Street, New York, USA</div>
            </li> */}
            <li>
                <div className="icon"><span className="mai-mail"></span></div>
                <div className="content"><p>offlinetoonline@gmail.com</p></div>
            </li>
            {/* <li>
                <div className="icon"><span className="mai-phone-portrait"></span></div>
                <div className="content"><p>+91 111 1111 111</p></div>
            </li> */}
            </ul>
        </div>
        <div className="col-lg-6 py-3 wow fadeInUp">
            <div className="subhead">Contact Us</div>
            <h2 className="title-section">Drop Us a Line</h2>
            <div className="divider"></div>
            
            <form onSubmit={submitHandler}>
            {loading && <Loader />}
            {error && <Message variant='danger'>{"Please try again later!"}</Message>}
            {success && <Message variant='danger'>{custom}</Message>}
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="py-2">
                <textarea rows="6" className="form-control" placeholder="Enter message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-pill mt-4">Send Message</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ContactUs;