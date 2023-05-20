import React, { useState } from 'react';
import '../css/index.css';
import {toggle,crossmenu,userMenu, menu_x} from '../js/innerIndex.js';
import logo from '../images/logo2.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';
import { FaUser,FaSearch,FaShoppingCart,FaEdit,FaLuggageCart,FaLanguage,FaHandsHelping,FaFileContract } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { MdLocalOffer,MdNotificationsActive,MdOutlineSettings,MdRoundaboutLeft,MdLogout } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { BiTrendingUp } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
import { BsFillBagHeartFill,BsFillBarChartFill} from "react-icons/bs";
import Login from '../Login';
import { useAuth0 } from "@auth0/auth0-react";
import productsapi from '../allproductlist.json'

function MyNavbar() {

  const { logout,isAuthenticated,user } = useAuth0();
  const [one,two]=useState("")
   let pros = productsapi.filter((items) => {
    
    if(one===""){
      return console.log("")
    }
    else if(items.product_Type.toLowerCase().includes(one.toLowerCase())){
      document.getElementById('searchClose').style.display="block"
      return items
    }else if(items.product_Name.toLowerCase().includes(one.toLowerCase())){
      document.getElementById('searchClose').style.display="block"
      return items
    }
    
  })
  let searchClose =()=> document.getElementById('searchClose').style.display="none"
  return (
  <>
  
    <div className="back-nav">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-dark back-g">
          <Link to="" className="navbar-brand">
            <img src={logo} className="logo-a" width="40%" height="50px" alt="Main Logo" />
            <span className="brand-1">PROCART</span>
          </Link>
         
            <ImMenu id="menu"  style={{ color: "white" }} onClick={toggle}/>
            <RxCross2 style={{ color: "white" }} className="fa-solid fa-xmark " id="cross"
            onClick={crossmenu} />
         
          <div className="callapse navbar-collapse" id="nav-1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <form method='get'>
                <div className="search-bar">
                  <input
                    type="text"
                    className="form-control search-back"
                    placeholder="search for products"
                    onChange={(search)=>{two(search.target.value)}}
                    name=''
                    
                  />
                  {/* <i className="fa-solid fa-magnifying-glass search-icon" /> */}
                  <FaSearch className='search-icon' type="submit"/>
                </div>
                </form>
              </li>
              { isAuthenticated ?
                (<li className="nav-item user"  onClick={userMenu} >
                <Link
                  to="#"
                  className="nav-link item-2 item-3 item-4 "
                  style={{ color: "var(--primary)" }}
                               >
                  
                    <small
                      style={{ paddingLeft: 5, fontSize: 16,color:'white' }}
                      className="user"
                    >
                      <FaUser  style={{ paddingRight: 5, fontSize: 22,color:'white' }}  />User
                    </small>
              
                </Link>
              </li> ) :
               (
              <li className="nav-item mr-1">
                <Link to="" className="nav-link item-2 ">
                  <Login/>
                </Link>
              </li>
              )
                }
              { isAuthenticated ? (<li></li>) : (<li className="nav-item mr-1">
                <Link to="signin" className="nav-link item-2 ">
                  <button
                    className="btn-2"
                    style={{
                      color: "black",
                      width: "100%",
                      backgroundColor: "white",
                      borderRadius: 5,
                      fontWeight: "bold"
                    }}
                  >
                    Sign in
                  </button>
                </Link>
              </li>)
              
              }
              <li className="nav-item mr-1 hov">
                <Link
                  to="#"
                  className="nav-link item-2 item-3 "
                  style={{ color: "white" }}
                >
                  
                    <small style={{ paddingLeft: 5 }}>
                    <BsFillBagHeartFill style={{ paddingRight: 5, fontSize: 24 }}/>Wishlist</small>
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="cart"
                  className="nav-link item-2 item-4"
                  style={{ color: "white" }}
                >
                  
                    <small style={{ paddingLeft: 5 }}>
                    <FaShoppingCart style={{ paddingRight: 5, fontSize: 24 }}/>Cart</small>
                  
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>



  <div id="model-boxx">

  </div>

  {/* Model Box End */}
  {/* User service Start */}
  <div className="user-service">
    <div className="usersss ">
      {/* <span><i class="fa-solid fa-xmark user-x"></i></span> */}
      <ul className="usersss-ul ">
        <li>
          <RxCross2 style={{ color: "white" }}  onClick={menu_x} className='user-x' />
          <FaUser  style={{ paddingRight: 5, fontSize: 27,color:'black' }} className="user pl-2"  />
        </li>
        <li className="pt-1 user-name"> {isAuthenticated && <span>{user.name}</span>} </li>
        <li>
          <img src={logo} className="pr-2" width="45px" height="35px" alt='Main logo' />
        </li>
      </ul>
    </div>
    <div className="service">
      <ul className="service-ul">
        <b>
        <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <FaUser   className="c-icon"  style={{ marginRight: 15, fontSize: 19}}  />
            My Profile
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
            <FaEdit  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Edit Profile
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
            <CgPassword className='c-icon'  style={{ marginRight: 15, fontSize: 19}} />
            Change Password
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
            <FaLuggageCart className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            My Orders
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <FaShoppingCart className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            My Cart
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
            <FaLanguage  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Choose Language
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <MdLocalOffer  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Offer Zone
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <RiCoupon2Fill  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Coupons
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <MdNotificationsActive  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            My Notifications
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <BiTrendingUp  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Trending
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <MdOutlineSettings  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Setting
          </li></Link>
          <Link to="chart" className='top-ser'>
          <li className='p-1'>
          <BsFillBarChartFill  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Perfromance Chart
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <FaHandsHelping  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Help center
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <FaFileContract  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            Contact Us
          </li></Link>
          <Link to="cart" className='top-ser'>
          <li className='p-1'>
          <MdRoundaboutLeft  className='c-icon'  style={{ marginRight: 15, fontSize: 19}}/>
            About Us
          </li></Link>
          <Link  className='top-ser'>
          <li className='p-1' onClick={()=> logout({ returnTo: window.location.origin })}>
          <MdLogout  className='c-icon'  style={{ marginRight: 15, fontSize: 19}} 
           />
           Log Out
          </li></Link>
        </b>
      </ul>
    </div>
  </div>


  <div className="container pros " id="searchClose">
                <div className="row ">
                    {
                        pros.map((items)=>{
                          return (
                          <div className="col-md-3 mt-2 mb-2 pb-4 pt-4 pr-2 pl-2 product-hover">
                                <img src={items.product_Image} width="100%" alt='product' className='pros-imgs' />
                                <div style={{ marginLeft: "20px" }}><h3 className="p-name">{items.product_Name}</h3>
                                    <span className="star">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <p className="rs">Rs {items.product_Price}/-</p>
                                    <Link to={`/all/${items.product_Type}/${items.id}`} onClick={searchClose}>
                                        <button className="add-cart p-2">Add to cart</button></Link>
                                </div>
                            </div>)
                            
                        })
                    }
                </div>
            </div>
  
</>
  )
}

export default MyNavbar