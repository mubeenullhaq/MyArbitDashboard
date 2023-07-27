import React, { useState, useReducer, useEffect, Fragment, Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import { getStakingsAction, unStakeAction, loadingToggleAction } from "../../store/actions/ManageStakingsAction";
import { Dropdown, Button, Modal } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ManageStakings = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [unstakeModal, setUnstakeModal] = useState(false);
  const [unStakeDoc, setUnStakeDoc] = useState({});

  useEffect(() => {
    dispatch(loadingToggleAction(true));
    dispatch(getStakingsAction());
  }, []);

  const openUnstakeModal = (staking) => {
    //console.log(staking);
    setUnStakeDoc(staking);
    setUnstakeModal(true);
  };
  const closeUnstakeModal = () => {
    setUnstakeModal(false);
  };

  const handleUnstake = (e) => {
    e.preventDefault();
    dispatch(unStakeAction(unStakeDoc, navigate));
    setUnstakeModal(false);
  };
  return (
    <Fragment>
      {/******************************* Modal to update Partner Data *****************************************/}
      <Modal className="modal fade" show={unstakeModal} onHide={() => closeUnstakeModal()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Unstake</h5>
            <Button variant="" type="button" className="close" x data-dismiss="modal" onClick={() => closeUnstakeModal()}>
              <span>×</span>
            </Button>
          </div>
          <div className="modal-body">
            {/* Form for Pool Creation */}
            <form className="comment-form" onSubmit={handleUnstake}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Are you sure you want to Unstake? In case you unstake you will be charged 10% of the amount staked.<span className="required">*</span>
                      {""}
                    </label>
                    {/* <input type="text" value={"partner.name"} className="form-control" onChange={(e) => console.log("e.target.value")} name="partnerName" placeholder="Enter Pool Name" /> */}
                    <input type="text" value={"pool._id"} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" />

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>

                <div className="col-lg-12 text-center">
                  <div class="row justify-content-center">
                    <div class="col">
                      <div className="form-group mb-3">
                        <input type="submit" value="Yes" className="submit btn btn-success" name="submit" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group mb-3">
                        <input type="button" value="No" className="submit btn btn-danger" onClick={() => closeUnstakeModal()} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Suspense
        fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
      >
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Stakings In Process</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool Name</th>
                      <th scope="col">Duration(days)</th>
                      <th scope="col">Profit</th>
                      <th scope="col">Amount Staked</th>
                      <th scope="col">Auto Stake</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.stakings.stakings &&
                      props.stakings.stakings.map((staking) => (
                        <tr key={staking.id}>
                          <td>{staking.pool_info.name}</td>
                          <td>{staking.pool_info.duration}</td>
                          <td>{staking.pool_info.profit + "%"}</td>
                          <td>{staking.amount_staked}</td>
                          <td class={staking.auto_stake === true ? "text-success" : "text-danger"}>{staking.auto_stake == true ? "ON" : "OFF"}</td>
                          <td>
                            {" "}
                            <Button as="a" href="#" className="btn btn-primary mb-1 ms-1" onClick={() => openUnstakeModal(staking)}>
                              Un-Stake
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  stakings: state.stakings,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(ManageStakings);
