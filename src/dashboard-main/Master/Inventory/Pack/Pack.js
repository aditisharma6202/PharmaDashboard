import React from 'react';
import Footer from '../../../../Footer/footer';
import Header from '../../../../header/header';
import { Link } from 'react-router-dom';
import { Cell, Column, Table ,ColumnHeaderCell2} from "@blueprintjs/table";

function Pack() {
    const dollarCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}}>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    );
    const statusCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}} >{`ACTIVE`}</Cell>
    );
   
    const actionCellRenderer=(rowIndex)=>(
        <Cell>{<div class="btn-group-sm mr-2 my-1" role="group" aria-label="First group">
        <button type="button" class="btn btn-warning px-1 text-light" style={{borderTopRightRadius:'0px' ,borderBottomRightRadius:'0px'}}>Edit</button>
        <button type="button" class="btn btn-danger px-1" style={{borderTopLeftRadius:'0px' ,borderBottomLeftRadius:'0px'}}>Delete</button>
       
      </div>}</Cell>
    )


    //headings
    const columnOneHeader = (index) => {
        return <ColumnHeaderCell2
        
        name="Name"
            style={{ color: "white" , backgroundColor:'#4863A0',textTransform:'uppercase'}}
        />
    };
    const sampleColumnTwo = (index) => {
        return <ColumnHeaderCell2
            name="status"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnThree = (index) => {
        return <ColumnHeaderCell2
            name="company"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnfour = (index) => {
        return <ColumnHeaderCell2
            name="Stock"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnfive = (index) => {
        return <ColumnHeaderCell2
            name="mrp"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnSix = (index) => {
        return <ColumnHeaderCell2
            name='action'
            style={{ color: "white",backgroundColor:'#AA6C39',textTransform:'uppercase' }}
        />
    };
    return ( <div>
        <Header/>
        <div className="below-header col-12 mt-5"></div>
        <div className='row  px-4 py-2'>
            <div className='col-md-8 col-12'>
            <div className='row full-border'>
            <div className='col-12 '>
            <div className='d-flex justify-content-between align-item-center bottom-border py-1'>  <h4 className=' table-heading align-item-center'>PACK MASTER</h4>
            <div className='btn-group-sm '>
                <Link to={'/packf2'}className='btn green fw-bold' style={{borderTopRightRadius:'0px' ,borderBottomRightRadius:'0px'}}><i class="bi bi-plus-circle-fill px-2"></i>ADD</Link>
                <Link to={'/packf2'} className='btn btn-light fw-bold'>F2</Link>
                </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex p-1'>
                    <input placeholder={'search'} className='col-6 p-1'/>
                    <div className='col-6'> dropdown</div>
                </div>
            </div>
         <Table numRows={10} enableRowHeader={false} rowHeights={[37,37,37,37,37,37,37,37,37,37,]} columnWidths={[800,250,180,]} >
    <Column  cellRenderer={dollarCellRenderer} columnHeaderCellRenderer={columnOneHeader} />
    <Column  cellRenderer={statusCellRenderer} columnHeaderCellRenderer={sampleColumnTwo} />
    
    
    <Column  cellRenderer={actionCellRenderer} columnHeaderCellRenderer={sampleColumnSix} />

</Table>
<div className="col-12 px-3 py-1 form-bottom">
        <div className="row gap-4">
          <div className="col-2 text-light bg-primary">C.R. DATE-</div>
          <div className="col-2 text-light bg-primary">M.D. DATE-</div>
          <div className="col-2 text-light bg-primary">L.A.-</div>

        </div>
       

      </div>
      <div className="col-12 px-3 py-1 form-bottom">
        <div className="col ">
          <button className="p-0 .btn-left-border-none btn btn-light">
         Dashboard
          </button>
          <button className="p-0 .btn-right-border-none btn btn-secondary">
          <i class="bi bi-heart-fill px-1"></i><span>F4</span>
          </button>
        </div>
      </div>
            </div>

          
            </div>
           
        </div>

        <Footer/>
    </div> );
}

export default Pack;