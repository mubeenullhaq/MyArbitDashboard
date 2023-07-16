import axiosInstance from "./AxiosInstance";
import swal from "sweetalert";

//Read All transactions of a logged in User
export function getTransactions() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "transactions";
  //console.log(localStorage.jwt);
  let token = JSON.parse(localStorage.jwt);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Read Totals for Admin
export function getTotals() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "totals";
  let token = JSON.parse(localStorage.jwt);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Read All withdraw Transactions for Admin
export function getWithdrawlRequestTransactions() {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "transactions/withdraw-requests";
  //console.log(localStorage.jwt);
  let token = JSON.parse(localStorage.jwt);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  return axiosInstance.get(url, config);
}

//Update a withdrawl request Status on Server for Admin
export function updateWithdrawRequest(_transactionId, _partnerId) {
  const url = process.env.REACT_APP_MYARBIT_HostUrl + "transactions/updateStatus";
  let token = JSON.parse(localStorage.jwt);
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };
  return axiosInstance.put(url, { id: _transactionId, partnerId: _partnerId }, { headers });
}

export function formatStakings(stakingsData) {
  let stakings = [];
  for (let key in stakingsData) {
    stakings.push({ ...stakingsData[key], id: key });
  }

  return stakings;
}

export function formatError(errorResponse) {
  switch (errorResponse) {
    case "User alredy registered":
      //return 'Email already exists';
      swal("Oops", "Email already exists", "error");
      break;
    case "Invalid email or password":
      //return 'Email not found';
      swal("Oops", "Invalid Email or Password ", "error", {
        button: "Try Again!",
      });
      break;
    case "INVALID_PASSWORD":
      //return 'Invalid Password';
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}
