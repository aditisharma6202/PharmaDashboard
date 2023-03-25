import React from 'react';
import ReactDOM from 'react-dom/client';
import './dashboard-main/dashboard.css'
import './index.css';
import { BrowserRouter , Route } from "react-router-dom";
import { Routes } from "react-router";
// import ScrollIntoView from "./contents/scrollUp.js/scrollUp";
import reportWebVitals from './reportWebVitals';
import Dashboard from './dashboard-main/dashboard';
import ProductMaster from './dashboard-main/Master/Inventory/product/productMaster';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     {/* <ScrollIntoView> */}
      
        <Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/product' element={<ProductMaster/>}/>


        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
