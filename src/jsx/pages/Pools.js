import React, {
  useState,
  useEffect,
  useReducer,
  Fragment,
  Suspense,
} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getPoolsAction } from "../../store/actions/PoolsActions";
import { createStakingsAction } from "../../store/actions/ManageStakingsAction";
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

function isNumber(str) {
  if (str.trim() === "") {
    return false;
  }

  return !isNaN(str);
}

const Pools = (props) => {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modalVisibility, setModalVisibility] = useState([]);

  const openModal = (index) => {
    const updatedVisibility = [...modalVisibility];
    updatedVisibility[index] = true;
    setModalVisibility(updatedVisibility);
  };

  const closeModal = (index) => {
    const updatedVisibility = [...modalVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setModalVisibility(updatedVisibility);
  };

  const navigate = useNavigate();

  //To get staking amount for staking creation
  const [stakeAmount, setStakeAmount] = useState("");
  const [poolId, setPoolId] = useState();
  let errorsObj = { amount: "" };
  const [errors, setErrors] = useState(errorsObj);

  useEffect(() => {
    reduxDispatch(getPoolsAction());
  }, []);

  function handleCreateStaking(e, index) {
    e.preventDefault();
    const form = e.target;
    const poolId = form.elements.poolId.value;
    const minStake = form.elements.minStake.value;
    let user = JSON.parse(localStorage.getItem("userDetails"));

    console.log(poolId);
    let error = false;
    const errorObj = { ...errorsObj };
    if (stakeAmount === "") {
      errorObj.amount = "Staking Amount must be valid number...";
      error = true;
      setErrors(errorObj);
      if (error) {
        return;
      }
    }
    if (stakeAmount === "0") {
      errorObj.amount = "Staking Amount must be greater than 0...";
      error = true;
      setErrors(errorObj);
      if (error) {
        return;
      }
    }
    if (!isNumber(stakeAmount)) {
      errorObj.amount = " Staking Amount Must be a Number";
      error = true;
      setErrors(errorObj);
      if (error) {
        return;
      }
    }
    if (JSON.parse(stakeAmount) > user.balance) {
      errorObj.amount = "Insufficient Balance.";
      error = true;
      setErrors(errorObj);
      if (error) {
        return;
      }
    }

    if (JSON.parse(stakeAmount) < minStake) {
      errorObj.amount = `Please enter an amount greater than ${minStake}`;
      error = true;
      setErrors(errorObj);
      if (error) {
        return;
      }
    }
    //console.log(e);
    //reduxDispatch(createStakingsAction());
    reduxDispatch(createStakingsAction(stakeAmount, poolId, navigate));
    closeModal(index);
    /* {
      Model should be closed here.
    } */
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
                    {props.pools.pools.map((pool, index) => (
                      <tr key={index}>
                        <td>{pool.name}</td>
                        <td>{pool.duration}</td>
                        <td>{pool.min_stake}</td>
                        <td>{pool.profit + "%"}</td>
                        <td>
                          <Button
                            as="a"
                            href="#"
                            className="btn btn-primary mb-1 ms-1"
                            onClick={() => openModal(index)}
                          >
                            Stake
                          </Button>
                          <Modal
                            className="modal fade"
                            show={modalVisibility[index]}
                            onHide={() => closeModal(index)}
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">
                                  Specify Staking Amount
                                </h5>
                                <Button
                                  variant=""
                                  type="button"
                                  className="close"
                                  x
                                  data-dismiss="modal"
                                  onClick={() => closeModal(index)}
                                >
                                  <span>×</span>
                                </Button>
                              </div>
                              <div className="modal-body">
                                <form
                                  className="comment-form"
                                  onSubmit={(e) =>
                                    handleCreateStaking(e, index)
                                  }
                                >
                                  <div className="row">
                                    <div className="col-lg-8">
                                      <div className="form-group mb-3">
                                        <label
                                          htmlFor="author"
                                          className="text-black font-w600"
                                        >
                                          {" "}
                                          Amount{" "}
                                          <span className="required">*</span>
                                          {""}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setStakeAmount(e.target.value)
                                          }
                                          name="stakeAmount"
                                          placeholder="Enter Staking Amount"
                                        />
                                        {errors.amount && (
                                          <div className="text-danger fs-12">
                                            {errors.amount}
                                          </div>
                                        )}
                                        <input
                                          type="text"
                                          value={pool._id}
                                          style={{ visibility: "hidden" }}
                                          onChange={(e) =>
                                            setStakeAmount(e.target.value)
                                          }
                                          name="poolId"
                                          placeholder="Author"
                                        />
                                        <input
                                          type="text"
                                          value={pool.min_stake}
                                          style={{ visibility: "hidden" }}
                                          onChange={(e) =>
                                            setStakeAmount(e.target.value)
                                          }
                                          name="minStake"
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
