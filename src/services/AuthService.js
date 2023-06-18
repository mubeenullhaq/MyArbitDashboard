import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

export function signUp(name, email, password, repeat_password) {
    //axios call
    const postData = {
        name,
        email,
        password,
        repeat_password
       // returnSecureToken: true,
    };
    const reqUrl = process.env.REACT_APP_MYARBIT_HostUrl +"user";
    return axios.post(
        reqUrl,
        postData,
    );
}

export function login(email, password) {
    const postData = {
        email,
        password,
        //returnSecureToken: true,
    };

    const reqUrl = process.env.REACT_APP_MYARBIT_HostUrl+ "user/login"

    return axios.post(
        reqUrl,
        postData,
    );
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
           swal("Oops", "Email not found", "error",{ button: "Try Again!",});
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

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
		return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }
		
    dispatch(loginConfirmedAction(tokenDetails));
	
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
