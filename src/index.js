import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import load from '../src/components/images/loading.gif';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/innerComponents/MyNavbar';
import Footer from './components/innerComponents/Footer';
import  './components/css/index.css';
import { Auth0Provider } from '@auth0/auth0-react'
import Error from './components/Error';

const MyLandingPage = React.lazy(() => import('./components/MyLandingPage'))
const Cart = React.lazy(() => import('./components/Cart'))
const Products = React.lazy(() => import('./components/Products'))
const ProductsDetails = React.lazy(() => import('./components/ProductsDetails'))
const MyCharts = React.lazy(() => import('./components/MyCharts'))
const SignForm = React.lazy(() => import('./components/SignInForm'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-gqqb2m1wa6wbl85k.us.auth0.com"
      clientId="OCyvpTYbsRQxJDChioOEhueVChAGozb5"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={ <Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <MyLandingPage />
          </Suspense>} />
          <Route path="signin" element={ <Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <SignForm/>
          </Suspense>} />
          <Route path="cart" element={<Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <Cart />
          </Suspense>} />
          <Route path="chart" element={<Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <MyCharts />
          </Suspense>} />
          <Route path="/all/:producttype" element={<Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <Products />
          </Suspense>} />
          <Route path="/all/:producttype/:id" element={<Suspense fallback={<div> <img src={load} className='loading' alt='loading'/></div>}>
            <ProductsDetails />
          </Suspense>} />
          <Route path="*" element={<Error />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
