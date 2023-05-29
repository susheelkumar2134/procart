import React from 'react'
import './css/index.css';
import productsapi from './allproductlist.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useParams } from 'react-router-dom'

function SearchProduct() {
    
    let pros= productsapi.filter(pro =>  pro.product_Type ===  proName.producttype )
  return (
    <div>
        <div className="container pros" >
                <div className="row mt-4 mb-5">
                    {pros.map((items) => {
                        return (
                            <div className="col-md-3 pb-4 pt-4 pr-2 pl-2 product-hover">
                                <img src={items.product_Image} width="100%" alt='product' className='pros-imgs' />
                                <div style={{ marginLeft: "20px" }}><h3 className="p-name">{items.product_Name}</h3>
                                    {/* <span className="star">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </span> */}
                                    <p className="rs">Rs {items.product_Price}/-</p>
                                    <Link to={`/${items.id}`} >
                                        <button className="add-cart p-2">Add to cart</button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    </div>
  )
}

export default SearchProduct