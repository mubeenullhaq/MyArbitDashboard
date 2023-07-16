import {
  formatStakings,
  formatError,
  getTransactions,
  getWithdrawlRequestTransactions,
  updateWithdrawRequest,
  getTotals,
} from "../../services/TransactionsService"; /* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
import {
  CONFIRMED_GET_TRANSACTIONS_ACTION,
  CONFIRMED_GET_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION,
  GET_TRANSACTIONS_FAILED_ACTION,
  LOADING_TOGGLE_ACTION,
  CONFIRMED_UPDATE_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION,
  CONFIRMED_GET_TOTALS_ACTION,
  CONFIRMED_DELETE_TRANSACTIONS_ACTION,
} from "./TransactionsTypes";

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

export function confirmedGetTransactionsAction(transactions) {
  return {
    type: CONFIRMED_GET_TRANSACTIONS_ACTION,
    payload: transactions,
  };
}

//Action for reading Totals admin only
export function getTotalsAction() {
  return (dispatch, getState) => {
    getTotals()
      .then((response) => {
        dispatch(confirmedGetTotals(response.data));
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(getTransactionsFailedAction(errorMessage));
      });
  };
}

export function confirmedGetTotals(totals) {
  return {
    type: CONFIRMED_GET_TOTALS_ACTION,
    payload: totals,
  };
}

//Action to update withdraw request of a partner by admin only
export function updateWithdrawRequestAction(_transactionId, _partnerId) {
  return (dispatch, getState) => {
    updateWithdrawRequest(_transactionId, _partnerId)
      .then((response) => {
        dispatch(confirmedUpdateTransactionsAction(response.data));
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

export function confirmedUpdateTransactionsAction(_transaction) {
  return {
    type: CONFIRMED_UPDATE_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION,
    payload: _transaction,
  };
}

//Action for reading all withdrawl Request transactions for Admin
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
        dispatch(getTransactionsFailedAction(error.response.data));
      });
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
