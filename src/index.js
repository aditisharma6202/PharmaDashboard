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
import Category from './dashboard-main/Master/Inventory/catagory/catagory';
import HSN from './dashboard-main/Master/Account/HSN/HSN';
import HSNF2 from './dashboard-main/Master/Account/HSN/HSNF2';
import CategoryF2 from './dashboard-main/Master/Inventory/catagory/catagoryf2';
import Brand from './dashboard-main/Master/Inventory/Brand/brand';
import BrandF2 from './dashboard-main/Master/Inventory/Brand/brandF2';
import GroupInventory from './dashboard-main/Master/Inventory/Group/group';
import GroupInventoryF2 from './dashboard-main/Master/Inventory/Group/groupf2';
import Pack from './dashboard-main/Master/Inventory/Pack/Pack';
import PackF2 from './dashboard-main/Master/Inventory/Pack/packf2';
import Unit from './dashboard-main/Master/Inventory/Unit/unit';
import UnitF2 from './dashboard-main/Master/Inventory/Unit/unitf2';
import Rack from './dashboard-main/Master/Inventory/Rack/rack';




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
<Route path='/hsn' element={<HSN/>}></Route>
<Route path='/hsnf2' element={<HSNF2/>}></Route>

<Route path='/leadger' element={<Leadger/>}></Route>
<Route path='/category' element={<Category/>}></Route>
<Route path='/categoryf2' element={<CategoryF2/>}></Route>


<Route path='/leadgerf2' element={<LeadgerF2/>}></Route>
<Route path='/brand' element={<Brand/>}></Route>
<Route path='/brandf2' element={<BrandF2/>}></Route>
<Route path='/groupInventory' element={<GroupInventory/>}></Route>
<Route path='/groupInventoryf2' element={<GroupInventoryF2/>}></Route>
<Route path='/pack' element={<Pack/>}></Route>
<Route path='/Rack' element={<Rack/>}></Route>



<Route path='/packf2' element={<PackF2/>}></Route>
<Route path='/unit' element={<Unit/>}></Route>
<Route path='/unitf2' element={<UnitF2/>}></Route>









        </Routes>
      
    {/* </ScrollIntoView> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
