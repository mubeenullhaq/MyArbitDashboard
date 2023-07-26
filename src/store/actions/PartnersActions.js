import {
  getPartners,
  partnerSearch,
  updatePartner,
  updateLoggedInPartner,
  blockPartner,
  getLoggedInParnter,
  formatError,
  TopUpLoggedInPartner,
  getReferredPartners,
} from "../../services/PartnersService";
import { CONFIRMED_GET_PARTNERS_ACTION, FAILED_GET_PARTNERS_ACTION, CONFIRMED_UPDATE_PARTNER_ACTION, PARTNERS_NOT_FOUND_ACTION } from "./PartnersTypes";
import swal from "sweetalert";

//Action for reading Logged In partner
export function getLoggedInPartnerAction() {
  return (dispatch, getState) => {
    getLoggedInParnter()
      .then((response) => {
        dispatch(confirmedGetPartnersAction(response.data));
      })
      .catch((error) => {
        console.log(error);

        dispatch(getPartnersFailedAction(error.response.data));
      });
  };
}

//Action for reading all the partners
export function getPartnersAction() {
  return (dispatch, getState) => {
    getPartners()
      .then((response) => {
        dispatch(confirmedGetPartnersAction(response.data));
      })
      .catch((error) => {
        console.log(error);

        dispatch(getPartnersFailedAction(error.response.data));
      });
  };
}

export function confirmedGetPartnersAction(partners) {
  return {
    type: CONFIRMED_GET_PARTNERS_ACTION,
    payload: partners,
  };
}

//Action for reading all referred parnters of a Logged In partner
export function getReferredPartnersAction() {
  return (dispatch, getState) => {
    getReferredPartners()
      .then((response) => {
        dispatch(confirmedGetPartnersAction(response.data));
      })
      .catch((error) => {
        console.log(error);

        dispatch(getPartnersFailedAction(error.response.data));
      });
  };
}

//Action for Searching Partners based on filters applied admin only
export function partnerSearchAction(_dateRange, _country, _balanceFrom, _balanceTo, _stakeFrom, _stakeTo, _isReferred) {
  return (dispatch, getState) => {
    partnerSearch(_dateRange, _country, _balanceFrom, _balanceTo, _stakeFrom, _stakeTo, _isReferred)
      .then((response) => {
        dispatch(confirmedGetPartnersAction(response.data));
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = formatError(error.response.data);
        dispatch(notFoundPartners(errorMessage));
      });
  };
}
export function notFoundPartners(error) {
  return {
    type: PARTNERS_NOT_FOUND_ACTION,
    payload: error,
  };
}

//Action for updating a Partner for Admins
export function updatePartnerAction(_partnerObj) {
  return (dispatch, getState) => {
    updatePartner(_partnerObj)
      .then((response) => {
        dispatch(confirmedUpdatePartnerAction(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getPartnersFailedAction(error.response.data));
      });
  };
}

//Action for Updating Logged In partner
export function updateLoggedInPartnerAction(_partnerObj) {
  return (dispatch, getState) => {
    updateLoggedInPartner(_partnerObj)
      .then((response) => {
        dispatch(confirmedGetUpdatedPartnerAction(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(updatePartnerFailedAction(error.response.data));
      });
  };
}

//Action for Updating Logged In partner
export function topUpPartnerAction(_topUpAmount) {
  return (dispatch, getState) => {
    TopUpLoggedInPartner(_topUpAmount)
      .then((response) => {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
        dispatch(confirmedTopUpPartnerAction(response.data, _topUpAmount));
      })
      .catch((error) => {
        console.log(error);
        dispatch(updatePartnerFailedAction(error.response.data));
      });
  };
}

export function confirmedTopUpPartnerAction(_partner, _topUpAmount) {
  swal("Great!", `You have successfull topped Up ${_topUpAmount}!`, "success");
  return {
    type: CONFIRMED_GET_PARTNERS_ACTION,
    payload: _partner,
  };
}

export function confirmedGetUpdatedPartnerAction(partners) {
  swal("Great!", "Your profile data is updated!", "success");
  return {
    type: CONFIRMED_GET_PARTNERS_ACTION,
    payload: partners,
  };
}

export function updatePartnerFailedAction(error) {
  if (error === "User already registed with the email ID.") swal("Oops", "Email Already Registered!", "error");
  return {
    type: FAILED_GET_PARTNERS_ACTION,
    payload: error,
  };
}

//Action for Blocking a Partner
export function blockPartnerAction(_partnerId, _status) {
  return (dispatch, getState) => {
    blockPartner(_partnerId, _status)
      .then((response) => {
        dispatch(confirmedUpdatePartnerAction(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getPartnersFailedAction(error.response.data));
      });
  };
}

export function confirmedUpdatePartnerAction(_partner) {
  return {
    type: CONFIRMED_UPDATE_PARTNER_ACTION,
    payload: _partner,
  };
}

export function getPartnersFailedAction(error) {
  return {
    type: FAILED_GET_PARTNERS_ACTION,
    payload: error,
  };
}
