import React from "react";
import Footer from "../../../../Footer/footer";
import Header from "../../../../header/header";
function LeadgerF2() {
  return (
    <div>
      <Header />
      <div className="below-header col-12 mt-5"></div>
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
                                 <label className='col-md-6 col-12'>MOBILE NUMBER </label>
                                        <input placeholder='' className='col-md-6 col-12'/>
                                 </div>
                                 <div className='row pt-2'>
                                 <label className='col-md-6 col-12'>LEDGER TYPE</label>
                                 <div className='col-md-6 col-12 mt-2'>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected value='1'>LEDGER TYPE</option>
  <option value="2">CUSTOMER</option>
  <option value="3">VENDOR</option>

 
  
</select>
                                    </div>
                                 </div>
                                

                                      
                                    
                                   
                                   
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='row bg-aliceblue'>
                                    
                                        <div className='col-md-6 col-12 mt-2'>NAME <span>*</span></div>
                                        <input placeholder='NAME' className='col-md-6 col-12 mt-2'/>
                                        <div className='col-md-6 col-12 mt-2'>GROUP Account <span>*</span></div>
                                        <input placeholder='ACCOUNT GROUP' className='col-md-6 col-12 mt-2'/>
                                   
                                       
                                    </div>
                                   
                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 col-12 px-3 mt-1 '>
                            <button className='btn btn-info text-light col-12' type='submit'>SAVE</button>
                        </div>
                        </div>
                      

                    </div>
                </div>
               </div>
                
                   
                
          
            <div className='col-md-4 col-12'>
           
            </div>
        </form>
      <Footer />
    </div>
  );
}

export default LeadgerF2;

