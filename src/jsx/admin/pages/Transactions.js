import React, { useState, useEffect, Fragment, Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getTransactionsAction,
  loadingToggleAction,
} from "../../../store/actions/TransactionsActions";

const Transactions = (props) => {
  const dispatch = useDispatch();
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
              <h4 className="card-title">Transactions</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Transaction Type</th>
                      <th scope="col">Transaction Amount</th>
                      <th scope="col">Created At</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {props.transactions.transactions &&
                      props.transactions.transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>
                            <span
                              class={
                                transaction.type === "deposit"
                                  ? "badge bg-success badge-lg"
                                  : "badge-danger badge badge-lg"
                              }
                            >
                              {transaction.type}
                            </span>
                          </td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.created_at}</td>
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
  transactions: state.transactions,
  showLoading: state.showLoading,
  error: state.error,
});

export default connect(mapStateToProps)(Transactions);
