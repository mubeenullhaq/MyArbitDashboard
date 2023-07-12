import { CONFIRMED_GET_TRANSACTIONS_ACTION, CONFIRMED_GET_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION, GET_TRANSACTIONS_FAILED_ACTION, LOADING_TOGGLE_ACTION } from "../actions/TransactionsTypes";

const initialState = {
  transactions: [],
  showLoading: false,
  error: null,
};

export default function TransactionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_TOGGLE_ACTION:
      return {
        ...state,
        showLoading: action.payload,
      };
    case CONFIRMED_GET_TRANSACTIONS_ACTION:
      return {
        ...state,
        transactions: action.payload,
        showLoading: false,
      };

    case CONFIRMED_GET_WITHRAWAL_REQUEST_TRANSACTIONS_ACTION:
      return {
        ...state,
        transactions: action.payload,
        showLoading: false,
      };
    case GET_TRANSACTIONS_FAILED_ACTION:
      return {
        ...state,
        showLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
