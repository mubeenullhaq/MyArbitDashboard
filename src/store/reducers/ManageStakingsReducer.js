import {
  CONFIRMED_CREATE_STAKINGS_ACTION,
  CONFIRMED_GET_STAKINGS_ACTION,
  GET_STAKINGS_FAILED_ACTION,
  LOADING_TOGGLE_ACTION,
} from "../actions/ManageStakingTypes";

const initialState = {
  stakings: null,
  error: null,
  showLoading: false,
};

export default function ManageStakingsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_TOGGLE_ACTION:
      return {
        ...state,
        showLoading: action.payload,
      };
    case CONFIRMED_CREATE_STAKINGS_ACTION:
      return {
        ...state,
        showLoading: false,
      };
    case CONFIRMED_GET_STAKINGS_ACTION:
      return {
        ...state,
        stakings: action.payload,
        showLoading: false,
      };
    case GET_STAKINGS_FAILED_ACTION:
      return {
        ...state,
        showLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }

}
