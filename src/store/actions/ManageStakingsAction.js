import {
  createPool,
  formatStakings,
  formatError,
  getStakings,
  getStakingsHistory,
  createStaking,
  updatePool,
} from "../../services/ManageStakingsService";
import {
  CONFIRMED_CREATE_POOL_ACTION,
  CONFIRMED_GET_STAKINGS_ACTION,
  GET_STAKINGS_FAILED_ACTION,
  LOADING_TOGGLE_ACTION,
  CONFIRMED_EDIT_POOL_ACTION,
  CONFIRMED_DELETE_POOL_ACTION,
} from "./ManageStakingTypes";

//Action for reading all in-process stakings of a Logged-In User
export function getStakingsAction() {
  return (dispatch, getState) => {
    getStakings()
      .then((response) => {
        let stakings = formatStakings(response.data);
        dispatch(confirmedGetStakingsAction(stakings));
      })
      .catch((error) => {
        //console.log('error');
        //console.log(error);
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(getStakingsFailedAction(errorMessage));
      });
  };
}

//Action for reading all completed stakings of a Logged-In User
export function getStakingsHistoryAction() {
  return (dispatch, getState) => {
    getStakingsHistory()
      .then((response) => {
        let stakings = formatStakings(response.data);
        dispatch(confirmedGetStakingsAction(stakings));
      })
      .catch((error) => {
        //console.log('error');
        //console.log(error);
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(getStakingsFailedAction(errorMessage));
      });
  };
}

export function confirmedGetStakingsAction(stakings) {
  return {
    type: CONFIRMED_GET_STAKINGS_ACTION,
    payload: stakings,
  };
}

export function getStakingsFailedAction(data) {
  return {
    type: GET_STAKINGS_FAILED_ACTION,
    payload: data,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
