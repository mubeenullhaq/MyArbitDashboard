import axiosInstance from './AxiosInstance';
import swal from "sweetalert";


export function getStakings() {
    const url = process.env.REACT_APP_MYARBIT_HostUrl+ "stakings";
    //console.log(localStorage.userDetails);
    let userDetails =  JSON.parse(localStorage.userDetails); 

    const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userDetails.idToken,
        }
      };
    return axiosInstance.get(url, config);
}

export function createPool(postData) {
    return axiosInstance.post(`posts.json`, postData);
}

export function updatePool(post, postId) {
    return axiosInstance.put(`posts/${postId}.json`, post);
}

export function deletePool(postId) {
    return axiosInstance.delete(`posts/${postId}.json`);
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
        case 'User alredy registered':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'Invalid email or password':
            //return 'Email not found';
           swal("Oops", "Invalid Email or Password ", "error",{ button: "Try Again!",});
           break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}
