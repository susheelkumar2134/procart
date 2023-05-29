import React from 'react'
import '../css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';


function ProductList() {
    const productList1 = [
        {
            "user_Id": "1",
            "product_Price": 40000,
            "id": "1",
            "product_Type": "laptops",
            "product_Name": "Asus laptops",
            "product_Details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam consequatur est corporis! Consequatur atque excepturi eum ipsum ea quae eveniet saepe at nesciunt ullam rem, sequi ipsam eligendi quidem?",
            "product_Image": "/images/laptop.png",
            "link": "/all/laptops/1"
        },
        {
            "user_Id": "16",
            "product_Price": 999,
            "id": "16",
            "product_Type": "keyboards",
            "product_Name": "Asus keyboards",
            "product_Details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam consequatur est corporis! Consequatur atque excepturi eum ipsum ea quae eveniet saepe at nesciunt ullam rem, sequi ipsam eligendi quidem?",
            "product_Image": "/images/keyboard.png",
            "link": "/all/keyboards/16"
        },
        {
            "user_Id": "22",
            "product_Price": 880,
            "id": "22",
            "product_Type": "mouses",
            "product_Name": "Asus mouses",
            "product_Details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam consequatur est corporis! Consequatur atque excepturi eum ipsum ea quae eveniet saepe at nesciunt ullam rem, sequi ipsam eligendi quidem?",
            "product_Image": "/images/mo1.png",
            "link": "/all/mouses/22"
        }, {
            "user_Id": "35",
            "product_Price": 30000,
            "id": "35",
            "product_Type": "chairs",
            "product_Name": "Asus chairs",
            "product_Details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam consequatur est corporis! Consequatur atque excepturi eum ipsum ea quae eveniet saepe at nesciunt ullam rem, sequi ipsam eligendi quidem?",
            "product_Image": "/images/c1.png",
            "link": "/all/chairs/35"
        }
    ]

    return (
        <div>

            <div className="new" style={{ backgroundColor: "black" }}>
                <div className="container p-2">
                    <center>
                        <h1 className="new-arrivals">New Arrivals</h1>
                        <span className="new-des">
                            New more exciting products are coming soon...
                        </span>
                    </center>
                </div>
            </div>
            <div className="container pros" >
                <div className="row mt-4 mb-5">
                    {productList1.map((items) => {
                        return (
                            <div className="col-md-3 pb-4 pt-4 pr-2 pl-2 product-hover">
                                <img src={items.product_Image} width="100%" alt='product' className='pros-imgs' />
                                <div style={{ marginLeft: "20px" }}><h3 className="p-name" >{items.product_Name}</h3>
                                    <span className="star">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </span>
                                    <p className="rs">Rs {items.product_Price}/-</p>
                                    <Link to={`/all/${items.product_Type}/${items.id}`} >
                                        <button className="add-cart p-2">Add to cart</button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="new" style={{ backgroundColor: "black" }}>
                <div className="container p-2">
                    <center>
                        <h1 className="new-arrivals">Popular products</h1>
                        <span className="new-des">
                            Here are the most selling products Buy now.
                        </span>
                    </center>
                </div>
            </div>
            <div className="container pros" >
                <div className="row mt-4 mb-5">
                {productList1.map((items) => {
                        return (
                            <div className="col-md-3 pb-4 pt-4 pr-2 pl-2 product-hover">
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
                                    <Link to={`/all/${items.product_Type}/${items.id}`} >
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

export default ProductList