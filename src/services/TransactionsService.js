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
