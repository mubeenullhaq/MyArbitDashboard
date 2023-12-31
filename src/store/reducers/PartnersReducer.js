import { act } from "react-dom/test-utils";
import { CONFIRMED_GET_PARTNERS_ACTION, FAILED_GET_PARTNERS_ACTION, CONFIRMED_UPDATE_PARTNER_ACTION, PARTNERS_NOT_FOUND_ACTION } from "../actions/PartnersTypes";

const initialState = {
  partners: [],
  isLoading: true,
  error: null,
};

export default function PartnersReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIRMED_GET_PARTNERS_ACTION:
      return {
        ...state,
        partners: action.payload,
        isLoading: false,
      };
    case CONFIRMED_UPDATE_PARTNER_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    case FAILED_GET_PARTNERS_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    case PARTNERS_NOT_FOUND_ACTION:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
