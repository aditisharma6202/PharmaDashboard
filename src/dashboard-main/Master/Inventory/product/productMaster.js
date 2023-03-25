import React from 'react';
import Header from '../../../../header/header';
function ProductMaster() {
    const tabData=['HSN','HSN','GROUP','TAX GROUP','LEDGER','VENDOR','LEDGER','LEDGER','PRODUCT']
    return ( <>
    <Header/>
    <div className='col-12'>
        <div className='row mt-5 tabrow px-3'>

            {
                tabData.map((tabData)=>{
                    return(<button className='col btn  tab text-light p-0 ' >
                            <div className='p-1'>{tabData}</div>
                            <div className='btn p-0 tab-close'>
                            <i class="bi bi-x-square text-light"></i>
                            </div>
                    </button>);
                })
            }
        </div>
    
    </div>
    <></>
    </> );
}

export default ProductMaster;