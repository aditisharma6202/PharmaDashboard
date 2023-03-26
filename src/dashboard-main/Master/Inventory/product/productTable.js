import React from 'react';
import { Cell, Column, Table ,ColumnHeaderCell2} from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";
function ProductTable() {
    const dollarCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}}>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    );
    const euroCellRenderer = (rowIndex) => (
        <Cell style={{fontSize:'17px'}} >{`€${(rowIndex * 10 * 0.85).toFixed(2)}`}</Cell>
    );
    const companyCellRenderer = (rowIndex) => (
        <Cell  style={{fontSize:'17px'}}>{`0.00`}</Cell>
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
            name="Packing"
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
  
    return (
        <div>
            <div className='col-12 '>
            <div className='d-flex justify-content-between align-item-center bottom-border py-1'>  <h5 className=' table-heading align-item-center'>PRODUCT MASTER</h5>
            <div className='btn-group-sm '>
                <button className='btn green fw-bold' style={{borderTopRightRadius:'0px' ,borderBottomRightRadius:'0px'}}><i class="bi bi-plus-circle-fill px-2"></i>ADD</button>
                <button className='btn btn-light fw-bold'>F2</button>
                </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex p-1'>
                    <input placeholder={'search'} className='col-6 p-1'/>
                    <div className='col-6'> dropdown</div>
                </div>
            </div>
         <Table numRows={10} enableRowHeader={false} rowHeights={[37,37,37,37,37,37,37,37,37,37,]} columnWidths={[364,150,280,130,130,180]} >
    <Column  cellRenderer={dollarCellRenderer} columnHeaderCellRenderer={columnOneHeader} />
    <Column  cellRenderer={euroCellRenderer} columnHeaderCellRenderer={sampleColumnTwo} />
    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnThree} />
    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnfour} />
    <Column  cellRenderer={companyCellRenderer} columnHeaderCellRenderer={sampleColumnfive} />
    <Column  cellRenderer={actionCellRenderer} columnHeaderCellRenderer={sampleColumnSix} />

</Table>
        </div>
   
);
}

export default ProductTable;