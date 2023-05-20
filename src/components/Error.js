import React from 'react'
import './css/index.css';
import error from './images/404-error.jpg'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <div >
        <img src={error}  width={100} className='error_Page' alt='Error page'/>
        <center>
        <Link to=" ">
        <button className='go-back'>Go Back</button></Link>
        </center>
        </div>
    </div>
  )
}

export default Error