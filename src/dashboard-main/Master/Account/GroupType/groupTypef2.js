
import React from "react";
import Footer from "../../../../Footer/footer";
import Header from "../../../../header/header";
function GroupTypeF2() {
  return (
    <div>
      <Header />
      <div className="below-header col-12 mt-5"></div>
      <form className="row p-2 px-4 bg-aliceblue ">
        <div className="col-md-8 col-12">
          <div className="card full-border">
            <div className="card-body">
              <h5 className="title">NEW PRODUCT</h5>
              <div className="row">
                <h5 className="sub-title">INFO</h5>

                <div className="col-md-6 col-12">
                  <div className="row fw-bold text-size-15px">
                    <div className="fw-bold col-md-6 col-12">GROUP TYPE</div>
                    <input placeholder="" className="col-md-6 col-12" />
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="row fw-bold text-size-15px">
                    <div className="col-md-6 col-12">STATUS</div>
                    <div className="col-md-6 col-12">
                      <select
                        class="form-select form-select-sm "
                        aria-label=".form-select-sm example"
                      >
                        <option selected value="1">
                          GOODS
                        </option>
                        <option value="2">PRODUCT TYPE</option>
                        <option value="3">SERVICE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                    < div className="row justify-content-center align-item-center gap-1 mt-2">
                    
                            <button className="btn btn-info col-md-4 col-12">SAVE</button>
                        
                        
                           <button className="btn btn-danger col-md-4 col-12"> CANCEL</button> 
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12"></div>
      </form>
      <Footer />
    </div>
  );
}

export default GroupTypeF2;
