import React from 'react';
import Header from '../../../../header/header';
import ProductTable from './productTable';
import ProductForm from './productForm';
import Footer from '../../../../Footer/footer';
function ProductMaster() {
    const tabData=['HSN','HSN','GROUP','TAX GROUP','LEDGER','VENDOR','LEDGER','LEDGER','PRODUCT']
    return ( <>
    <Header/>
    <div className='col-12 '>
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
        <div className='only-mobile'></div>
        <div className='row p-2 px-4'>
            <div className='col-md-8 col-12'>
                <div className='full-border'>
                <ProductTable/>
                <ProductForm/>
                </div>
                
                   
                
            </div>
            <div className='col-md-4 col-12'>
            <div className='card bg-aliceblue'>
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
        </div>
  
    </div>
    <Footer/>
    </> );
}

export default ProductMaster;