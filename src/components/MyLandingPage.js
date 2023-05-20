import React from 'react'
import AllProduct from './innerComponents/AllProduct'
import ControlledCarousel from './innerComponents/ControlledCarousel'
import ProductList from './innerComponents/ProductList'




function MyLandingPage() {
  return (
    <>
    <AllProduct/>
    <ControlledCarousel/>
    <ProductList/>
    </>
  )
}

export default MyLandingPage