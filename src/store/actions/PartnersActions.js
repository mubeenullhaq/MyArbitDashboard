import { getPartners, partnerSearch, updatePartner, blockPartner, formatError } from "../../services/PartnersService";
import { CONFIRMED_GET_PARTNERS_ACTION, FAILED_GET_PARTNERS_ACTION, CONFIRMED_UPDATE_PARTNER_ACTION, PARTNERS_NOT_FOUND_ACTION } from "./PartnersTypes";

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

//Action for updating a Partner
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
