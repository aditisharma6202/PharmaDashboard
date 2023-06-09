import React from 'react';
import Footer from '../../../../Footer/footer';
import Header from '../../../../header/header';
import { Link } from 'react-router-dom';
import { Cell, Column, Table ,ColumnHeaderCell2} from "@blueprintjs/table";

function HSN() {
    const dollarCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}}>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    );
    const euroCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}} >{`€${(rowIndex * 10 * 0.85).toFixed(2)}`}</Cell>
    );
    const companyCellRenderer = (rowIndex) => (
        <Cell  style={{fontSize:'17px'}}>{`0.00`}</Cell>
    );
    const StatusCellRenderer = (rowIndex) => (
        <Cell  style={{fontSize:'17px'}}>{'ACTIVE'}</Cell>
    );
    const EditCellRenderer=(rowIndex)=>(
        <Cell>{<div class="btn-group-sm mr-2 my-1" role="group" aria-label="First group">
        <button type="button" class="btn btn-warning px-1 text-light" >Edit</button>
     
      </div>}</Cell>
    )
    const DeleteCellRenderer=(rowIndex)=>(
        <Cell>{<div class="btn-group-sm mr-2 my-1" role="group" aria-label="First group">
       
        <button type="button" class="btn btn-danger px-1" >Delete</button>
       
      </div>}</Cell>
    )


    //headings
    const columnOneHeader = (index) => {
        return <ColumnHeaderCell2
        
        name="HSN"
            style={{ color: "white" , backgroundColor:'#4863A0',textTransform:'uppercase'}}
        />
    };
    const sampleColumnTwo = (index) => {
        return <ColumnHeaderCell2
            name="IGST"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnThree = (index) => {
        return <ColumnHeaderCell2
            name="CGST"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnfour = (index) => {
        return <ColumnHeaderCell2
            name="SGST"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnEight = (index) => {
        return <ColumnHeaderCell2
            name="STATUS"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnfive = (index) => {
        return <ColumnHeaderCell2
            name="CES PER"
            style={{ color: "white",backgroundColor:'#4863A0',textTransform:'uppercase' }}
        />
    };
    const sampleColumnSix = (index) => {
        return <ColumnHeaderCell2
            name='EDIT'
            style={{ color: "white",backgroundColor:'#AA6C39',textTransform:'uppercase' }}
        />
    };
    const sampleColumnSeven = (index) => {
        return <ColumnHeaderCell2
            name='DELETE'
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
            <div className='d-flex justify-content-between align-item-center bottom-border py-1'>  <h4 className=' table-heading align-item-center'>GROUP MASTER</h4>
            <div className='btn-group-sm '>
                <Link to={'/hsnf2'}className='btn green fw-bold' style={{borderTopRightRadius:'0px' ,borderBottomRightRadius:'0px'}}><i class="bi bi-plus-circle-fill px-2"></i>ADD</Link>
                <Link to={'/hsnf2'} className='btn btn-light fw-bold'>F2</Link>
                </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex p-1'>
                    <input placeholder={'search'} className='col-6 p-1'/>
                    <div className='col-6'> dropdown</div>
                </div>
            </div>
         <Table numRows={10} enableRowHeader={false} rowHeights={[37,37,37,37,37,37,37,37,37,37,]} columnWidths={[380,150,150,130,130,150,100,100]} >
    <Column  cellRenderer={dollarCellRenderer} columnHeaderCellRenderer={columnOneHeader} />
    <Column  cellRenderer={euroCellRenderer} columnHeaderCellRenderer={sampleColumnTwo} />
    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnThree} />

    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnfour} />
    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnfive} />
    <Column  cellRenderer={StatusCellRenderer} columnHeaderCellRenderer={sampleColumnEight} />

    <Column  cellRenderer={EditCellRenderer} columnHeaderCellRenderer={sampleColumnSix} />
    <Column  cellRenderer={DeleteCellRenderer} columnHeaderCellRenderer={sampleColumnSeven} />

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

export default HSN;