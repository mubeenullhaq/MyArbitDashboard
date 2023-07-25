import React, { useState, Fragment, useMemo, useEffect } from "react";
import Select from "react-select";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
// images

const Pools = () => {
  const [days, setDays] = useState();
  const [tier, setTier] = useState();
  const [amount, setAmount] = useState();
  const [profit, setProfit] = useState();

  const options3 = [
    { value: "10", label: "Silver Elite" },
    { value: "30", label: "Gold Elite" },
    { value: "60", label: "Platinum Elite" },
    { value: "90", label: "Titanium Elite" },
    { value: "180", label: "Diamond Elite" },
  ];
  const   handlePoolSelect = (selectedOption) => {
    setDays(parseFloat(selectedOption.value))
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.userDetails);
    setTier(user.tier);
  }, [profit]);
  const handleCalculateProfit = (e) => {
    e.preventDefault();
    let profitPercentage;

    switch (tier) {
      case 1:
        switch (days) {
          case 10:
            profitPercentage = 2.5;
            break;
          case 30:
            profitPercentage = 9;
            break;
          case 60:
            profitPercentage = 20;
            break;
          case 90:
            profitPercentage = 33;
            break;
          case 180:
            profitPercentage = 70;
            break;
          default:
            throw new Error("Invalid number of days for Tier1.");
        }
        break;
      case 2:
        switch (days) {
          case 10:
            profitPercentage = 2.75;
            break;
          case 30:
            profitPercentage = 9.9;
            break;
          case 60:
            profitPercentage = 22;
            break;
          case 90:
            profitPercentage = 36.3;
            break;
          case 180:
            profitPercentage = 77;
            break;
          default:
            throw new Error("Invalid number of days for Tier2.");
        }
        break;
      case 3:
        switch (days) {
          case 10:
            profitPercentage = 3;
            break;
          case 30:
            profitPercentage = 10.8;
            break;
          case 60:
            profitPercentage = 24;
            break;
          case 90:
            profitPercentage = 39.6;
            break;
          case 180:
            profitPercentage = 84;
            break;
          default:
            throw new Error("Invalid number of days for Tier3.");
        }
        break;
      case 4:
        switch (days) {
          case 10:
            profitPercentage = 3.25;
            break;
          case 30:
            profitPercentage = 11.7;
            break;
          case 60:
            profitPercentage = 26;
            break;
          case 90:
            profitPercentage = 42.9;
            break;
          case 180:
            profitPercentage = 91;
            break;
          default:
            throw new Error("Invalid number of days for Tier4.");
        }
        break;
      case 5:
        switch (days) {
          case 10:
            profitPercentage = 3.5;
            break;
          case 30:
            profitPercentage = 12.6;
            break;
          case 60:
            profitPercentage = 28;
            break;
          case 90:
            profitPercentage = 46.2;
            break;
          case 180:
            profitPercentage = 98;
            break;
          default:
            throw new Error("Invalid number of days for Tier5.");
        }
        break;
      case 6:
        switch (days) {
          case 10:
            profitPercentage = 3.75;
            break;
          case 30:
            profitPercentage = 13.5;
            break;
          case 60:
            profitPercentage = 30;
            break;
          case 90:
            profitPercentage = 49.5;
            break;
          case 180:
            profitPercentage = 105;
            break;
          default:
            throw new Error("Invalid number of days for Tier6.");
        }
        break;
      case 7:
        switch (days) {
          case 10:
            profitPercentage = 4;
            break;
          case 30:
            profitPercentage = 14.4;
            break;
          case 60:
            profitPercentage = 32;
            break;
          case 90:
            profitPercentage = 52.8;
            break;
          case 180:
            profitPercentage = 112;
            break;
          default:
            throw new Error("Invalid number of days for Tier6.");
        }
        break;
      default:
        throw new Error("Invalid tier.");
    }
    setProfit((amount * profitPercentage) / 100);
    return (amount * profitPercentage) / 100;
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Calculate Profit</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={handleCalculateProfit}>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Pool</label>
                    <div className="col-sm-9">
                      <Select options={options3} onChange={handlePoolSelect} className="custom-react-select" defaultValue={""} isSearchable={true} placeholder={"Select Pool"} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Amount</label>
                    <div className="col-sm-9">
                      <input type="Number" onChange={(e) => setAmount(parseFloat(e.target.value))} className="form-control" placeholder="Amount" />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">
                        Calculate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          {" "}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Expected Profit</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Profit</label>
                  <div className="col-sm-9">
                    <input type="Number" defaultValue={profit} onChange={(e) => e.preventDefault()} className="form-control" placeholder="Profit" />
                  </div>
                </div>
                {/* <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="Password" />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row mb-3">
                        <label className="col-form-label col-sm-3 pt-0">Radios</label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" defaultChecked />
                            <label className="form-check-label">First radio</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                            <label className="form-check-label">Second radio</label>
                          </div>
                          <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" value="option3" disabled />
                            <label className="form-check-label">Third disabled radio</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="mb-3 row">
                      <div className="col-sm-3">Checkbox</div>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">Example checkbox</label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Calulate
                        </button>
                      </div>
                    </div>
                  </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pools;
