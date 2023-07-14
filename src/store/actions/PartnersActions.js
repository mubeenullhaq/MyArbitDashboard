import { getPartners, updatePartner, blockPartner } from "../../services/PartnersService";
import { CONFIRMED_GET_PARTNERS_ACTION, FAILED_GET_PARTNERS_ACTION, CONFIRMED_UPDATE_PARTNER_ACTION } from "./PartnersTypes";

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

export function confirmedGetPartnersAction(pools) {
  return {
    type: CONFIRMED_GET_PARTNERS_ACTION,
    payload: pools,
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
