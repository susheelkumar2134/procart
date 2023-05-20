import React from 'react'
import './css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';
import laptop from './images/laptop.png';
import keyboard from './images/keyboard.png';
import headphone from './images/headphone.png';



function Cart() {
    return (
        <div >
            <div className='cover-cart'>
                <div className="container cart-page">
                    <center></center>
                    <table className="tab">
                        <tbody>
                            <tr className="p-2">
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src={headphone} alt='cart pro' />
                                        <div>
                                            <p>Boat headphone</p>
                                            <small>$50</small>
                                            <br />
                                            <Link to="">Remove</Link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$50.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src={laptop} alt='cart pro' />
                                        <div>
                                            <p>Realme buds neo</p>
                                            <small>$20</small>
                                            <br />
                                            <Link to="">Remove</Link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$50.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src={keyboard} alt='cart pro'/>
                                        <div>
                                            <p>HP Keyboard</p>
                                            <small>$50</small>
                                            <br />
                                            <Link to="">Remove</Link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="number" defaultValue={1} />
                                </td>
                                <td>$50.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$200</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$35</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$230</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cart