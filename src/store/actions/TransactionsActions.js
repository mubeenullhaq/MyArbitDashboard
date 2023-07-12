import { formatStakings, formatError, getTransactions, getWithdrawlRequestTransactions } from "../../services/TransactionsService";
import { CONFIRMED_GET_TRANSACTIONS_ACTION, CONFIRMED_GET_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION, GET_TRANSACTIONS_FAILED_ACTION, LOADING_TOGGLE_ACTION } from "./TransactionsTypes";

//Action for reading all transactions of a Logged-In User
export function getTransactionsAction() {
  return (dispatch, getState) => {
    getTransactions()
      .then((response) => {
        let transactions = formatStakings(response.data);
        dispatch(confirmedGetTransactionsAction(transactions));
      })
      .catch((error) => {
        //console.log('error');
        //console.log(error);
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(getTransactionsFailedAction(errorMessage));
      });
  };
}

//Action for reading withdrawl Request transactions
export function getWithdrawlRequestTransactionsAction() {
  return (dispatch, getState) => {
    getWithdrawlRequestTransactions()
      .then((response) => {
        // let transactions = formatStakings(response.data);
        dispatch(confirmedGetWithdrawlRequestTransactionsAction(response.data));
      })
      .catch((error) => {
        //console.log('error');
        //console.log(error);
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(getTransactionsFailedAction(errorMessage));
      });
  };
}
export function confirmedGetTransactionsAction(transactions) {
  return {
    type: CONFIRMED_GET_TRANSACTIONS_ACTION,
    payload: transactions,
  };
}

export function confirmedGetWithdrawlRequestTransactionsAction(transactions) {
  return {
    type: CONFIRMED_GET_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION,
    payload: transactions,
  };
}

export function getTransactionsFailedAction(data) {
  return {
    type: GET_TRANSACTIONS_FAILED_ACTION,
    payload: data,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
