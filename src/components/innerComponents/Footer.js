import React from 'react'
import '../css/index.css';
import logo from '../images/logo2.png';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BsGooglePlay,BsLinkedin } from "react-icons/bs";
import { FaApple,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaInstagramSquare } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <footer>
                <div className="container-fluid footer-1 pt-3 ml-4 pr-4 pb-3"  style={{ paddingLeft:"3%" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="#" className="navbar-brand">
                                <img src={logo} width="60" height="50px" alt='Footer logo' />
                                <span className="brand-1" style={{ color: "#66FF53" }}>
                                    PROCART
                                </span>
                            </Link>
                            <p>
                                Procart is your one-stop destinatio for all your entertainment such as
                                <br />
                                latest movies, most popular web shows, live TV channels, newly
                                released
                                <br />
                                songs etc.
                            </p>
                            <span>
                                Follow us for updates:
                                <FaFacebookSquare className='logo-icons' />
                                <FaTwitterSquare className='logo-icons' />
                                <FaYoutubeSquare className='logo-icons' />
                                <BsLinkedin className='logo-icons' />
                                <FaInstagramSquare className='logo-icons'/>
                            </span>
                        </div>
                        <div className="col-md-2 pt-2">
                            <span style={{ paddingLeft:"16%" }}>Company</span>
                            <ul>
                                <li>
                                    <Link to="">About</Link>
                                </li>
                                <li>
                                    <Link to="">Careers</Link>
                                </li>
                                <li>
                                    <Link to="">Advertise</Link>
                                </li>
                                <li>
                                    <Link to="">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 pt-2">
                            <span style={{ paddingLeft:"16%" }}>Legal</span>
                            <ul>
                                <li>
                                    <Link to="">Download App</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="">Term of Services</Link>
                                </li>
                                <li>
                                    <Link to="">Content Complaints</Link>
                                </li>
                                <li>
                                    <Link to="">compliance Report</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-2">
                            <span style={{ paddingLeft:"7%" }}>Install our App for Best experience</span>
                            <ul>
                                <li>
                                    <Link to="">Open camera or pay QR code</Link>
                                </li>
                                <li>
                                    <Link to="">app on your mobile</Link>
                                </li>
                                <li>
                                    <Link to="">
                                        App Available on: <BsGooglePlay className='logo-icons' />
                                        <FaApple className='logo-icons' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">Content Complaints</Link>
                                </li>
                                <li>
                                    <Link to="">compliance Report</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ border: "1px solid var(--secondry)", width: "95%" }} />
                    <div className="container-fluid">
                        <center>
                            <span>
                                Copyright © 2022 MX Media &amp; Entertainment. All rights reserved.
                            </span>
                        </center>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer