import React, { useState } from 'react';
import '../css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';
import laptop from '../images/laptop.png';
import keyboard from '../images/keyboard.png';
import mouse from '../images/mouse.png';
import headphone from '../images/headphone.png';
import chair from '../images/chair.png';
import mobile from '../images/mobile2.png';
// import {changeColor} from '../js/innerIndex.js';




function AllProduct() {

    let [getColor,setColor]=useState("")
    function changeColor(){
        var color=document.getElementById('color').value;
        setColor(color)
        document.documentElement.style.setProperty('--primary',getColor);
        }

    let [getTextColor,setTextColor]=useState("rgb(92, 88, 88)")
    function changeColorText(){
        var color=document.getElementById('colorText').value;
        setTextColor(color)
        document.documentElement.style.setProperty('--secondry',getTextColor);
    }

    var pro = [
        {
            'id': 1,
            'img': laptop,
            'name': 'Laptop',
            'price': 40000,
            'discreptions': 'Gaming Laptop',
            'html_file': 'Laptops.html',
            'product_Type':'laptops'
        },
        {
            'id': 2,
            'img': keyboard,
            'name': 'Keyboard',
            'price': 40000,
            'discreptions': 'Gaming Keyboard ',
            'html_file': 'Keyboard.html',
            'product_Type':'keyboards'
        }, {
            'id': 3,
            'img': mouse,
            'name': 'Mouse',
            'price': 40000,
            'discreptions': 'Gaming Mouse',
            'html_file': 'Mouse.html',
            'product_Type':'mouses'
        }, {
            'id': 4,
            'img': headphone,
            'name': 'Headphone',
            'price': 40000,
            'discreptions': 'Gaming Headphone',
            'html_file': 'Headphone.html',
            'product_Type':'headphones'
        }, {
            'id': 5,
            'img': chair,
            'name': 'Chair',
            'price': 40000,
            'discreptions': 'Gaming Chair',
            'html_file': 'Chair.html',
            'product_Type':'chairs'
        }, {
            'id': 6,
            'img': mobile,
            'name': 'Mobile',
            'price': 40000,
            'discreptions': 'Gaming Mobile',
            'html_file': 'Phone.html',
            'product_Type':'mobiles'
        }
    ]


    return (
        <>
            <div className="main-cover">
                <div className="all-products">
                    <div className="container pt-2 mb-1">
                        <div className="row" id="productall">
                            {pro.map((items) => {
                                return (
                                    <div className="col-md-2 col-sm-4 col-xs-4 all-list my-2 anchor" >
                                        <center>
                                            <Link to={`/all/${items.product_Type}`} className='anchor'>
                                                <img src={items.img} width='120' alt='products' />
                                                <p className="i-names">{items.name}</p>
                                            </Link>
                                        </center>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className="sec-all-pro">
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/laptops`} className="anchor">
                            <img src={laptop} width="100%" alt='products' />
                            <span className='pro-names'>Laptop</span>
                        </Link>
                    </center>
                </div>
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/keyboards`} className="anchor">
                            <img src={keyboard} width="100%" alt='products' />
                            <span className='pro-names'>Keyboard</span>
                        </Link>
                    </center>
                </div>
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/mouses`} className="anchor">
                            <img src={mouse} width="100%" alt='products' />
                            <span className='pro-names'>Mouse</span>
                        </Link>
                    </center>
                </div>
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/headphones`} className="anchor">
                            <img src={headphone} width="100%" alt='products' />
                            <span className='pro-names'>Headphone</span>
                        </Link>
                    </center>
                </div>
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/chairs`} className="anchor">
                            <img src={chair} width="100%" alt='products' />
                            <span className='pro-names'>Chair</span>
                        </Link>
                    </center>
                </div>
                <div className="sec-pro">
                    <center>
                        <Link to={`/all/mobiles`} className="anchor" >
                            <img src={mobile} width="100%" alt='products' />
                            <span className='pro-names'>Mobile</span>
                        </Link>
                    </center>
                </div>
            </div>

            <div className="clock-box p-3">
                <center>
                    <b>
                        <div>
                            <img src={logo} width="65px" height="50px" alt='Main logo' />
                        </div>
                        <div className="" id="clock"></div>
                    </b>
                    <div>
                        <b>
                            <span className="theme " style={{ fontFamily: "Hind Siliguri" }}>
                                Change Themes color
                            </span>
                            <br />
                            <input
                                type="color"
                                id="color"
                                onChange={changeColor}
                            />
                            <br />
                            <span className="theme">Change Font color</span>
                            <br />
                            <input
                                type="color"
                                id="colorText"
                                onChange={changeColorText}
                            />
                        </b>
                    </div>
                </center>
            </div>


        </>
    )
}

export default AllProduct