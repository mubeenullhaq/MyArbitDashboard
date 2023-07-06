import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
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
  CONFIRMED_CREATE_STAKINGS_ACTION,
  CONFIRMED_GET_STAKINGS_ACTION,
  GET_STAKINGS_FAILED_ACTION,
  LOADING_TOGGLE_ACTION,
} from "./ManageStakingTypes";

//Action to create a staking of a Logged-In User
export function createStakingsAction(_amount, _poolId, navigate) {
  return (dispatch, getState) => {
    createStaking(_amount, _poolId)
      .then((response) => {
        let staking = response.data.staking;
        let updated_user = response.data.updated_user;
        localStorage.setItem("userDetails", JSON.stringify(updated_user));
        dispatch(confirmedCreateStakingsAction(true));
        navigate("/manage-stakings");
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

export function confirmedGetStakingsAction(flag) {
  return {
    type: CONFIRMED_GET_STAKINGS_ACTION,
    payload: flag,
  };
}

export function confirmedCreateStakingsAction(staking) {
  return {
    type: CONFIRMED_CREATE_STAKINGS_ACTION,
    payload: staking,
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
