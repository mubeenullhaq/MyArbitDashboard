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
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Referral Link</h4>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input type="text" className="form-control" defaultValue={process.env.REACT_APP_MYARBIT_DashboardUrl + "referral?ref=abc"} disabled ref={inputRef} />
                <button className="btn btn-primary" type="button" onClick={handleCopyClick}>
                  {copyButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Referred Partners</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                {/* <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Transaction Type</th>
                      <th scope="col">Transaction Amount</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.transactions.transactions &&
                      props.transactions.transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>
                            <span class={transaction.type === "deposit" ? "badge bg-success badge-lg" : "badge-danger badge badge-lg"}>{transaction.type}</span>
                          </td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.created_at}</td>
                          <td>
                            <span class={transaction.status === "Served" ? "text-success" : "text-danger"}>{transaction.status}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table> */}
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
