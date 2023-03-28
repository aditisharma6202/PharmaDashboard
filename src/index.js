import React from 'react';
import ReactDOM from 'react-dom/client';
import './dashboard-main/dashboard.css'
import './index.css';
import { BrowserRouter , Route } from "react-router-dom";
import { Routes } from "react-router";
import "@blueprintjs/table/lib/css/table.css";
// import ScrollIntoView from "./contents/scrollUp.js/scrollUp";
import reportWebVitals from './reportWebVitals';
import Dashboard from './dashboard-main/dashboard';
import ProductMaster from './dashboard-main/Master/Inventory/product/productMaster';
import ProductF2 from './dashboard-main/Master/Inventory/product/ProductF2';
import GroupType from './dashboard-main/Master/Account/GroupType/groupType';
import GroupTypeF2 from './dashboard-main/Master/Account/GroupType/groupTypef2';
import Group from './dashboard-main/Master/Account/Group/Group';
import GroupF2 from './dashboard-main/Master/Account/Group/Groupf2';
import Leadger from './dashboard-main/Master/Account/Leadger/leadger';
import LeadgerF2 from './dashboard-main/Master/Account/Leadger/leadgerf2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     {/* <ScrollIntoView> */}
      
        <Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/product' element={<ProductMaster/>}/>
<Route path='/productf2' element={<ProductF2/>}></Route>
<Route path='/grouptype' element={<GroupType/>}></Route>
<Route path='/grouptypef2' element={<GroupTypeF2/>}></Route>
<Route path='/group' element={<Group/>}></Route>
<Route path='/groupf2' element={<GroupF2/>}></Route>
<Route path='/leadger' element={<Leadger/>}></Route>
<Route path='/leadgerf2' element={<LeadgerF2/>}></Route>






        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
