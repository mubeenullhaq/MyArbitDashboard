import React, { Fragment } from "react";

const BalanceCard = () => {
  const user = JSON.parse(localStorage.userDetails);
  return (
    <Fragment>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div className="widget-stat card bg-secondary ">
              <div className="card-body p-4">
                <div className="media">
                  <span className="me-3">
                    <i className="la la-dollar"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">Balance</p>
                    <h3 className="text-white">{user.balance}$</h3>
                    <div className="progress mb-2 bg-secondary">
                      <div
                        className="progress-bar progress-animated bg-white"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <small>30% Increase in 30 Days</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="widget-stat card bg-secondary ">
              <div className="card-body p-4">
                <div className="media">
                  <span className="me-3">
                    <i className="la la-dollar"></i>
                  </span>
                  <div className="media-body text-white">
                    <p className="mb-1">Amount Staked</p>
                    <h3 className="text-white">{user.total_staked}$</h3>
                    <div className="progress mb-2 bg-secondary">
                      <div
                        className="progress-bar progress-animated bg-white"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <small>30% Increase in 30 Days</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BalanceCard;
