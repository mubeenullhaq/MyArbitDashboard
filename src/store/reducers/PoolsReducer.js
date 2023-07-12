import { CONFIRMED_GET_POOL_ACTION, CONFIRMED_GET_POOL_REQUEST_ACTION, CONFIRMED_CREATE_POOL_ACTION, CONFIRMED_HIDE_POOL_ACTION } from "../actions/PoolsTypes";

const initialState = {
  pools: [],
  isLoading: true,
  error: null,
};

export default function PoolsReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIRMED_CREATE_POOL_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    case CONFIRMED_GET_POOL_REQUEST_ACTION:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CONFIRMED_GET_POOL_ACTION:
      return {
        ...state,
        pools: action.payload,
        isLoading: false,
      };
    case CONFIRMED_HIDE_POOL_ACTION:
      return {
        ...state,
        //pools: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
