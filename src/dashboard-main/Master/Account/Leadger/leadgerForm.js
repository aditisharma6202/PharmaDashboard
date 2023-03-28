import React from 'react';
const Detail=(props)=>{
    return(<>
   <div className="d-flex row mt-1">
                <div className="col-4" style={{fontSize:'15px'}}>{props.detailOne} </div>
                <div className="col-8 d-flex gap-1 ">
                  {props.head==='rupee'?<span>&#8377;</span> :''}
                  {props.head==='icon'?<span>{props.icon}</span>:''}
                  <input disabled placeholder={props.detailTwo} className='w-50' /></div>
              </div>
    </>);
  }
function LeadgerForm() {
    return ( <div className='bg-aliceblue text-size-15px fw-bolder '>
        <h5 className='col-12 bottom-border '>
           ADDRESS DETAILS 
        </h5> 
        <div className='px-2'>
            <div className='row mt-1 '>
                <div className='col-md-3 col-12'>ADDRESS</div>
                <input className='col-md-9 col-12' />
            </div>
            <div className='row mt-1'>
                <div className='col-md-4 col-12'>
                    <div className='row'>
                        <label className='col-md-6 col-12'>LOCALITY</label>
                        <input className='col-md-6 col-12'/>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='row'>
                        <label className='col-md-6 col-12'>PINCODE</label>
                        <input className='col-md-6 col-12'/>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='row'>
                        <label className='col-md-6 col-12'>AREA</label>
                        <input className='col-md-6 col-12'/>
                    </div>
                </div>
            </div>
           <div className='row mt-1'>
            <div className='col-md-4 col-12'>
                <h5>CONTACT INFO</h5>
                <Detail detailOne={'EMAIL'} detailTwo={''} head={'icon'} icon={<i class="bi bi-envelope-fill"></i>}/>
           <Detail detailOne={'WHATSAPP'} detailTwo={''} head={'icon'} icon={<i class="bi bi-whatsapp"></i>}/>
            </div>
            <div className='col-md-4 col-12'>
                <h5>LICENSE DETAIL</h5>
                <Detail detailOne={'GST NO.'} detailTwo={''} head={'icon'} icon={<i class="bi bi-brightness-low-fill"></i>}/>
           <Detail detailOne={'PAN NO.'} detailTwo={''} head={'icon'} icon={<i class="bi bi-brightness-low-fill"></i>}/>
           <Detail detailOne={'FSSAI NO.'} detailTwo={''} head={'icon'} icon={<i class="bi bi-brightness-low-fill"></i>}/>
            </div>
            <div className='col-md-4 col-12'>
                <h5>CURRENT INFO</h5>
                <Detail detailOne={'OPENIN'} detailTwo={''} head={'rupee'} />
           <Detail detailOne={'DEBIT'} detailTwo={''} head={'rupee'} />
           <Detail detailOne={'CREDIT'} detailTwo={''} head={'rupee'}/>
           <Detail detailOne={'PDC'} detailTwo={''} head={'rupee'}/>
            </div>
           </div>
            </div>
    </div> );
}

export default LeadgerForm;