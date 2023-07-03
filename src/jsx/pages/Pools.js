import React, {
  useState,
  useEffect,
  useReducer,
  Fragment,
  Suspense,
} from "react";
import { connect, useDispatch } from "react-redux";
import { getPoolsAction } from "../../store/actions/PoolsActions";
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

const Pools = (props) => {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    reduxDispatch(getPoolsAction());
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
              <h4 className="card-title">Investment Pools List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Duration(days)</th>
                      <th scope="col">Min-Stake</th>
                      <th scope="col">Profit</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.pools.pools.map((pool) => (
                      <tr key={pool.id}>
                        <td>{pool.name}</td>
                        <td>{pool.duration}</td>
                        <td>{pool.min_stake}</td>
                        <td>{pool.profit}</td>
                        <td>
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
  pools: state.pools,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(Pools);
