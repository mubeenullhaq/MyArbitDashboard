import axiosInstance from "../services/AxiosInstance";
import swal from "sweetalert";

//Read all partners from Server
export function getLoggedInParnter() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/profile";
  let token = JSON.parse(localStorage.jwt);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Read all partners from Server for admins only
export function getPartners() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user";
  let token = JSON.parse(localStorage.jwt);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Read all partners from Server for admins only
export function getReferredPartners() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/referred";
  let token = JSON.parse(localStorage.jwt);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Search partners from Server based on filters provided
export function partnerSearch(_dateRange, _country, _balanceFrom, _balanceTo, _stakeFrom, _stakeTo, _isReferred) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/search";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  const queryPrams = {
    dateRange: _dateRange,
    country: _country,
    balanceFrom: _balanceFrom,
    balanceTo: _balanceTo,
    stakeFrom: _stakeFrom,
    stakeTo: _stakeTo,
    isReferred: _isReferred,
  };
  return axiosInstance.get(url, { params: queryPrams, headers: headers });
}

//Update a partner on Server for admin
export function updatePartner(_partnerObj) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/update/admin";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, _partnerObj, { headers });
}

//Update a Logged In partner
export function updateLoggedInPartner(_partnerObj) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, _partnerObj, { headers });
}

//Top Up Logged In partner
export function TopUpLoggedInPartner(_topUpAmount) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/topUp";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, { topUp_amount: _topUpAmount }, { headers });
}

//Widthdraw for Logged In partner
export function withdrawLoggedInPartner(_withdrawAmount, _walletAddress) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/withdraw";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, { withdraw_amount: _withdrawAmount, wallet_address: _walletAddress }, { headers });
}
//Block partner admin Only
export function blockPartner(_partnerId, _status) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "user/block";
  let token = JSON.parse(localStorage.jwt);
  const data = {
    partnerId: _partnerId,
    status: !_status,
  };
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, data, { headers });
}

export function formatError(errorResponse) {
  switch (errorResponse) {
    case "No Partners Found against applied Filters":
      //return 'Email already exists';
      swal("Oops", "No Partners Found against applied Filters", "error", { button: "Try Again!" });
      break;
    // case "Invalid email or password":
    //   //return 'Email not found';
    //   swal("Oops", "Invalid Email or Password ", "error", {
    //     button: "Try Again!",
    //   });
    //   break;
    // case "INVALID_PASSWORD":
    //   //return 'Invalid Password';
    //   swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
    //   break;
    // case "USER_DISABLED":
    //   return "User Disabled";

    default:
      swal("Oops", "Something went wrong", "error", { button: "Try Again!" });
  }
}
