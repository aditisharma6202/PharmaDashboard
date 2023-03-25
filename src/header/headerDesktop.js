import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./headerData";

//nested nesteddropdown data
const NestedDropdownData=({info})=>{
    //console.log('nested info'+  JSON.stringify(info.data))
    //console.log('nested info key'+Object.keys(info.data) )
    const nestedArray = info.data[Object.keys(info.data)]
  
    return(
    <div className="">
       {
        nestedArray.map((info)=>{
            return(<Link to={`/${info.link}`}  className='nested-links header-nested-dropdown-btn' >
            <div className=' py-1 px-4'> {info.title}</div>
            </Link>);
        })
       }

    </div>);
}
//dropdown data and nested dropdown
const NestedDropdown=({info})=>{
 const [opennesteddropdown , setOpennesteddropdown]=useState(false)

 if(info.icon){
    return(  <Link
    to={`/${info.link}`}
    className=" header-nav-links  header-nested-dropdown-btn text-dark d-flex gap-2 py-1 px-2 justify-content-between"
  >
    <div>
      
      {info.name}
    </div>
  </Link>)
 }
   else{
    return(
      <fiv className=''>
        <div className="header-nav-links d-flex gap-2 py-1 px-2 justify-content-between nested-dropdown-btn
         header-nested-dropdown-btn">
  <div>

      {info.name}
    </div>
        {info.icon ? "" :
        <div >
        <button className="btn p-0" onClick={()=>{setOpennesteddropdown(!opennesteddropdown) }}>
        <i class="bi bi-caret-down-fill"></i>
        </button>
        </div>
        }
       
        </div>
        {opennesteddropdown&&<NestedDropdownData info={info}/>}
        </fiv>
    )
   }
}
const HeaderDropdown=({data})=>{
    const [dropdown, setDropdown]=useState(false);
    const dropdowndata = data.data[Object.keys(data.data)];
    return(
        <div className="col header-nav">
              <button className=" p-0 btn  header-nav-btn" onClick={()=>{setDropdown(!dropdown)}}>
                {data.title}
                 </button>
                 <div className={dropdown&&'card'}>
                 {dropdown &&
        dropdowndata.map((info) => {
            
          return (
            <div className="">
              <NestedDropdown info={info} />
            </div>
          );
        })}
        </div>
              </div>
    );
}


function HeaderDesktop() {
  const menu = [
    { icon: <i class="bi bi-house-check-fill"></i>, title: "Comapny Name" },
    { icon: <i class="bi bi-people-fill"></i>, title: "Manage User" },
    { icon: <i class="bi bi-gear-fill"></i>, title: "App Settings" },
    {
      icon: <i class="bi bi-power text-danger"></i>,
      title: <span className="text-danger">Logout</span>,
    },
  ];
  return (
    <div className="header-desktop px-4 py-2">
      <div className="row justify-content-between">
        <div className="col-8">
          <div className="row">
            {data.map((data) => {
                
              return<HeaderDropdown data={data}/>
              ;
            })}
          </div>
        </div>
        <div className="col-4">
          <div className="row justify-content-between">
            <div className="col-4 pt-1"> Tracerate Pvt. Ltd. </div>
            <div className="col-6">
              <div className="d-flex justify-content-between align-item-center gap-1  header-icons">
                <button className="btn p-0 text-dark  header-icons">
                  <i class="bi bi-search"></i>
                </button>
                <button className="btn p-0 text-dark  header-icons">
                  <i class="bi bi-tag-fill  header-icons"></i>
                </button>
                <button className="btn p-0 text-dark  header-icons">
                  <i class="bi bi-bell-fill"></i>
                </button>
                {menu.map((info) => {
                  return (
                    <>
                      <button className="btn p-0 text-dark only-desktop  header-icons">
                        {info.icon}
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
