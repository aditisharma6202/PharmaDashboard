import React from 'react';
import Footer from '../../../../Footer/footer';
import Header from '../../../../header/header';

function ProductF2() {
    const tabData=['HSN','HSN','GROUP','TAX GROUP','LEDGER','VENDOR','LEDGER','LEDGER','PRODUCT']
   
    return ( <div className='100vh bg-aliceblue' >
        <Header/>
        <div className='col-12 ' style={{zIndex:-1}}>
        <div className='row mt-5 tabrow px-3 d-flex '>

            {
                tabData.map((tabData)=>{
                    return(<button className='col btn  tab text-light p-0  only-desktop' >
                            <div className='p-1'>{tabData}</div>
                            <div className='btn p-0 tab-close'>
                            <i class="bi bi-x-square text-light"></i>
                            </div>
                    </button>);
                })
            }
        </div>
        <form className='row p-2 px-4 bg-aliceblue'>
           
               <div className='col-md-8 col-12'>
                <div className='card full-border'>
                    <div className='card-body'>
                        <h5 className='title'>NEW PRODUCT</h5>
                        <div className='row'>
                        <div className='col-md-8 col-12 bg-aliceblue'>
                            <h6 className='text-uppercase sub-title'>Primary Detail</h6>
                            <div className='row fw-bold text-size-15px justify-content-between'>
                                < div className='col-md-6 col-12'>
                                 <div className='row fw-bold pt-2'>
                                 <label className='col-md-6 col-12'>BARCODE *</label>
                                        <input placeholder='BARCODE' className='col-md-6 col-12'/>
                                 </div>
                                 <div className='row pt-2'>
                                 <label className='col-md-6 col-12'>PRODUCT <span className='text-danger'>*</span></label>
                                        <input placeholder='PRODUCT' className='col-md-6 col-12'/>
                                 </div>
                                 <div className='row pt-2'>
                                 <label className='col-md-6 col-12'>COMPANY</label>
                                        <input placeholder='COMPANY' className='col-md-6 col-12'/>
                                 </div>

                                      
                                    
                                   
                                   
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='row bg-aliceblue'>
                                    
                                        <div className='col-md-6 col-12 mt-2'>CODE</div>
                                        <input placeholder='CODE' className='col-md-6 col-12 mt-2'/>
                                        <div className='col-md-6 col-12 mt-2'>PACKING</div>
                                        <input placeholder='PACKING' className='col-md-6 col-12 mt-2'/>
                                   
                                        <div className='col-md-6 col-12 mt-2'>TYPE</div>
                                    <div className='col-md-6 col-12 mt-2'>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected value='1'>GOODS</option>
  <option value="2">PRODUCT TYPE</option>
  <option value="3">SERVICE</option>

 
  
</select>
                                    </div>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 col-12 px-3'>
                            <button className='btn btn-info text-light col-12' type='submit'>SAVE</button>
                        </div>
                        </div>
                      

                    </div>
                </div>
               </div>
                
                   
                
          
            <div className='col-md-4 col-12'>
            <div className='card bg-aliceblue full-border'>
                    <div className='card-body'>
                        <h5 className='title'>
                            Search Product
                        </h5>
                        <div className='col d-flex mt-3'>
                            <input/><button className='btn btn-success btn-left-border-none'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    <Footer/>
    </div> );
}

export default ProductF2;