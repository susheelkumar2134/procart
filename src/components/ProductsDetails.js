import React from 'react'
import './css/index.css';
import productsapi from './allproductlist.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useParams } from 'react-router-dom';
import { BsFillBagHeartFill } from "react-icons/bs";


function ProductsDetails() {
  let proId = useParams()
  const pro = proId.id
  const proDetails = productsapi.find((val) => val.id === pro)

  return (
    <div >

      <div className="container my-5 details ">
        <div className="row">
          <div className="col-sm-6 text-center align-self-center">
            <img src={proDetails.product_Image} alt="product_Img" className="img-fluid pro-duct" />
          </div>
          <div className="col-sm-5 offset-sm-1 pt-1">
            <h2>{proDetails.product_Name} <small><BsFillBagHeartFill style={{  cursor: 'pointer' }}
            className='wishlist'/> </small> </h2>
            <hr />
            <p>{proDetails.product_Details}</p>
           
            <h4>
             Rs -/ {proDetails.product_Price}
            </h4>
            
            {/* <a href="" class="btn btn-warning shadow px-5 py-2">Go to cart</a> */}
            <form action="/add-to-cart" className="d-inline">
              <input type="hidden" name="prod_id" defaultValue="" id="prod_id" />
              <button type="submit" className="btn btn-primary shadow px-5 py-2">
                Add to cart
              </button>
            </form>
            <Link to="" className="btn btn-danger shadow px-5 py-2 ms-4">
              Buy Now
            </Link>
            <h5 className="mt-4">Available Offers</h5>
            <ul>
              <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit</li>
              <li>Special Price Get extra ₹3000 off (price inclusive of discount)</li>
              <li>No cost EMI ₹1,667/month. Standard EMI also available</li>
              <li>
                Partner Offer ₹2000 Flipkart Gift Card on Every 1000th Transaction
                with a new Visa Debit/Credit Card
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductsDetails