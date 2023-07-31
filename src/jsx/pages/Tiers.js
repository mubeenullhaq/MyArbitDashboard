import React, { useState, useEffect, useRef, Fragment, Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import { getTransactionsAction, loadingToggleAction } from "../../store/actions/TransactionsActions";

const Transactions = (props) => {
  const dispatch = useDispatch();
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const inputRef = useRef(null); // Create a ref to the input element

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select(); // Select the input's text
      navigator.clipboard
        .writeText(inputRef.current.value) // Copy the selected text to the clipboard
        .then(() => {
          setCopyButtonText("Copied");
        })
        .catch((error) => {
          console.error("Error copying text:", error);
        });
    }
  };
  useEffect(() => {
    dispatch(loadingToggleAction(true));
    dispatch(getTransactionsAction());
  }, []);
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
        {/************************************Tier 1***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 1 (balance: 0 - 500 )</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>2.5%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite </td>
                      <td>30</td>
                      <td>9%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite </td>
                      <td>60</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite </td>
                      <td>90</td>
                      <td>33%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite </td>
                      <td>180</td>
                      <td>70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/************************************Tier 2***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 2 (balance: 501 - 2,000 )</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>2.75%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>9.9%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>22%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>36.3%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>77%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/************************************Tier 3***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 3 (balance: 2,001 - 5,000 )</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>10.8%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>24%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>39.6%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>84%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/************************************Tier 4***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 4 (balance: 5,001 - 10,000)</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>3.25%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>11.7%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>26%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>42.9%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>91%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/************************************Tier 5***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 5 (balance: 10,001 - 25,000 )</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>3.5%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>12.6%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>28%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>46.2%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>98%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/************************************Tier 6***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 6 (balance: 25,001 - 50,000 )</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>3.75%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>13.5%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>49.5%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>105%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/************************************Tier 7***********************************/}
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tier 7 (balance: 50,000plus)</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Pool</th>
                      <th scope="col">Investment Period</th>
                      <th scope="col">Return On Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Silver Elite</td>
                      <td>10</td>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <td>Gold Elite</td>
                      <td>30</td>
                      <td>14.4%</td>
                    </tr>
                    <tr>
                      <td>Platinum Elite</td>
                      <td>60</td>
                      <td>32%</td>
                    </tr>
                    <tr>
                      <td>Titanium Elite</td>
                      <td>90</td>
                      <td>52.8%</td>
                    </tr>
                    <tr>
                      <td>Diamond Elite</td>
                      <td>180</td>
                      <td>112%</td>
                    </tr>
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
  transactions: state.transactions,
  showLoading: state.showLoading,
  error: state.error,
});

export default connect(mapStateToProps)(Transactions);
