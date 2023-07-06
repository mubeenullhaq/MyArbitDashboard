import React, {
  useState,
  useReducer,
  useEffect,
  Fragment,
  Suspense,
} from "react";
import { connect, useDispatch } from "react-redux";
import {
  getStakingsAction,
  loadingToggleAction,
} from "../../store/actions/ManageStakingsAction";
import { Dropdown, Button, Modal } from "react-bootstrap";

const initialState = false;
const reducer = (state, action) => {
  switch (action.type) {
    case "createStaking":
      return { ...state, createStaking: true };
    case "createStakingClose":
      return { ...state, createStaking: false };

    default:
      return state;
  }
};

const ManageStakings = (props) => {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    reduxDispatch(loadingToggleAction(true));
    reduxDispatch(getStakingsAction());
  }, []);
  function handleCreateStaking(e) {
    e.preventDefault();
    dispatch({ type: "createStakingClose" });
  }
  return (
    <Fragment>
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
                          <td>
                            {" "}
                            <Button
                              as="a"
                              href="#"
                              className="btn btn-primary mb-1 ms-1"
                              onClick={() => {
                                console.log("aaaaa");
                                dispatch({ type: "createStaking" });
                              }}
                            >
                              Stake
                            </Button>
                          </td>

                          <Modal
                            className="modal fade"
                            show={state.createStaking}
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Send Message</h5>
                                <Button
                                  variant=""
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  onClick={() =>
                                    dispatch({ type: "createStakingClose" })
                                  }
                                >
                                  <span>×</span>
                                </Button>
                              </div>
                              <div className="modal-body">
                                <form
                                  className="comment-form"
                                  onSubmit={handleCreateStaking}
                                >
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-group mb-3">
                                        <label
                                          htmlFor="author"
                                          className="text-black font-w600"
                                        >
                                          {" "}
                                          Amount{" "}
                                          <span className="required">*</span>
                                          {" dd"}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="Author"
                                          name="Author"
                                          placeholder="Author"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group mb-3">
                                        <input
                                          type="submit"
                                          value="Confirm Staking"
                                          className="submit btn btn-primary"
                                          name="submit"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Modal>
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
