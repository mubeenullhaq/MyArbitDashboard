import React, { useState, useEffect } from "react";
import { Dropdown, Button, Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import LogoutPage from "./Logout";

import profile from "../../../images//United.png";
import { topUpPartnerAction, withdrawPartnerAction } from "../../../store/actions/PartnersActions";

const Header = ({ onNote }) => {
  const [topUpModal, setTopUpModal] = useState(false);
  const [withDrawModal, setWithDrawModal] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const [rightSelect, setRightSelect] = useState("Eng");
  const dispatch = useDispatch();
  const partner = JSON.parse(localStorage.userDetails);

  //For fix header
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  //const [searchBut, setSearchBut] = useState(false);
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  const handleInputChange = (attr, value) => {
    console.log("a"); //  setPartner((partner) => ({
    //    ...partner,
    //    [attr]: value,
    //  }));
  };

  function handleTopUp(e) {
    e.preventDefault();
    dispatch(topUpPartnerAction(topUpAmount));
    // setTimeout(() => {
    //   dispatch(getPartnersAction());
    // }, 2000);
    closeTopUpModal();
  }

  function handleWithdraw(e) {
    e.preventDefault();
    dispatch(withdrawPartnerAction(withdrawAmount, walletAddress));
    closeWithDrawModal();
  }
  const closeTopUpModal = () => {
    setTopUpModal(false);
  };
  const openTopUpModal = (partner) => {
    setTopUpModal(true);
  };
  const openWithdrawModal = (partner) => {
    setWithDrawModal(true);
  };
  const closeWithDrawModal = () => {
    setWithDrawModal(false);
  };
  return (
    <>
      {/******************************* Modal to update Partner Data *****************************************/}
      <Modal className="modal fade" show={topUpModal} onHide={() => closeTopUpModal()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Top Up</h5>
            <Button variant="" type="button" className="close" x data-dismiss="modal" onClick={() => closeTopUpModal()}>
              <span>×</span>
            </Button>
          </div>
          <div className="modal-body">
            {/* Form for Pool Creation */}
            <form className="comment-form" onSubmit={(e) => handleTopUp(e)}>
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Amount <span className="required">*</span>
                      {""}
                    </label>
                    <input type="Number" value={topUpAmount} className="form-control" onChange={(e) => setTopUpAmount(e.target.value)} name="partnerName" placeholder="Enter Amount" />
                    {/* <input type="text" value={pool._id} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" /> */}

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <input
                  type="text"
                  value={"aad"}
                  style={{ visibility: "hidden" }}
                  className="form-control"
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  name="poolName"
                  placeholder="Enter Pool Name"
                />
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <input type="submit" value="Confirm" className="submit btn btn-primary" name="submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/******************************* Withdraw Modal *****************************************/}
      <Modal className="modal fade" show={withDrawModal} onHide={() => closeWithDrawModal()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Withdraw</h5>
            <Button variant="" type="button" className="close" x data-dismiss="modal" onClick={() => closeWithDrawModal()}>
              <span>×</span>
            </Button>
          </div>
          <div className="modal-body">
            {/* Form for Pool Creation */}
            <form className="comment-form" onSubmit={(e) => handleWithdraw(e)}>
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Withdraw Amount <span className="required">*</span>
                      {""}
                    </label>
                    <input type="Number" value={withdrawAmount} className="form-control" onChange={(e) => setWithdrawAmount(e.target.value)} name="partnerName" placeholder="Enter Amount" />
                    {/* <input type="text" value={pool._id} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" /> */}

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Network <span className="required">*</span>
                      {""}
                    </label>
                    <input type="Text" value={"TRON TRC20"} className="form-control" name="partnerName" placeholder="" disabled />
                    {/* <input type="text" value={pool._id} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" /> */}

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="author" className="text-black font-w600">
                      {" "}
                      Reciever Address <span className="required">*</span>
                      {""}
                    </label>
                    <input type="Text" value={walletAddress} className="form-control" onChange={(e) => setWalletAddress(e.target.value)} name="partnerName" placeholder="Your Wallet Address" />
                    {/* <input type="text" value={pool._id} style={{ visibility: "hidden" }} name="poolId" placeholder="POOL_ID" /> */}

                    {/* {errors.poolName && <div className="text-danger fs-12">{errors.poolName}</div>} */}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <input type="submit" value="Confirm" className="submit btn btn-primary" name="submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <div className={`header ${headerFix ? "is-fixed" : ""}`}>
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar" style={{ textTransform: "capitalize" }}>
                  {finalName.join(" ").length === 0 ? "Dashboard" : finalName.join(" ") === "dashboard dark" ? "Dashboard" : finalName.join(" ")}
                </div>
                <div className="sell-blance">
                  <div className="input-tier-group">
                    <span className="input-group-tier-text">Tier &nbsp; &nbsp;{partner.tier}</span>
                  </div>
                </div>
              </div>
              <div className="navbar-nav header-right">
                <div className="nav-item d-flex align-items-center">
                  <div className="input-group">
                    <div className="row">
                      <div className="col">
                        {" "}
                        <Button as="a" href="#" className="btn btn-primary mb-1 ms-1" onClick={() => openTopUpModal()}>
                          {" "}
                          Top&nbsp;Up
                        </Button>
                      </div>
                      <div className="col">
                        {" "}
                        <Button as="a" href="#" className="btn btn-primary mb-1 ms-1" onClick={() => openWithdrawModal()}>
                          {" "}
                          Withdraw
                        </Button>
                      </div>
                      <div className="col">
                        {" "}
                        <Dropdown as="li" className="nav-item dropdown header-profile">
                          <Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer">
                            <img src={profile} width={20} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu align="right" className="dropdown-menu dropdown-menu-end">
                            <Link to="/profile" className="dropdown-item ai-icon">
                              <svg
                                id="icon-user1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-primary me-1"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                              </svg>
                              <span className="ms-2">Profile </span>
                            </Link>

                            <LogoutPage />
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  partners: state.partners,
  showLoading: state.showLoading,
  error: state.error,
});

export default connect(mapStateToProps)(Header);
