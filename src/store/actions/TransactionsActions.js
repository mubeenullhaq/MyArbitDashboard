import {
    formatStakings,
    formatError,
    getTransactions
} from '../../services/TransactionsService';
import {
    CONFIRMED_GET_TRANSACTIONS_ACTION,
    GET_TRANSACTIONS_FAILED_ACTION,
    LOADING_TOGGLE_ACTION,
} from './TransactionsTypes';

//Action for reading all in-process stakings of a Logged-In User
// export function getStakingsAction() {
//     return (dispatch, getState) => {
//         getStakings().then((response) => {
//             let stakings = formatStakings(response.data);
//             dispatch(confirmedGetStakingsAction(stakings));
//         }).catch((error) => {
//             //console.log('error');
//             //console.log(error);
//             console.log(error);
//             const errorMessage = formatError(error.response.data);
//             dispatch(getStakingsFailedAction(errorMessage));
//         });;
//     };
// }

//Action for reading all transactions of a Logged-In User
export function getTransactionsAction() {
    return (dispatch, getState) => {
        getTransactions().then((response) => {
            let transactions = formatStakings(response.data);
            dispatch(confirmedGetTransactionsAction(transactions));
        }).catch((error) => {
            //console.log('error');
            //console.log(error);
            console.log(error);
            const errorMessage = formatError(error.response.data);
            dispatch(getTransactionsFailedAction(errorMessage));
        });;
    };
}

export function confirmedGetTransactionsAction(transactions) {
    return {
        type: CONFIRMED_GET_TRANSACTIONS_ACTION,
        payload: transactions,
    };
}


export function getTransactionsFailedAction(data) {
    return {
        type: GET_TRANSACTIONS_FAILED_ACTION,
        payload: data,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
// export function confirmedCreatePostAction(singlePost) {
	
//     return {
//         type: CONFIRMED_CREATE_POOL_ACTION,
//         payload: singlePost,
//     };
// }


// export function deletePostAction(postId, history) {
//     return (dispatch, getState) => {
//         deletePost(postId).then((response) => {
//             dispatch(confirmedDeletePostAction(postId));
//             history.push('/postpage');
//         });
//     };
// }
// export function confirmedDeletePostAction(postId) {
//     return {
//         type: CONFIRMED_DELETE_POOL_ACTION,
//         payload: postId,
//     };
// }


// export function updatePostAction(post, history) {
//     return (dispatch, getState) => {
//         updatePost(post, post.id).then((reponse) => {
//             dispatch(confirmedUpdatePostAction(post));
//             history.push('/postpage');
//         });
			
//     };
// }
// export function confirmedUpdatePostAction(post) {

//     return {
//         type: CONFIRMED_EDIT_POOL_ACTION,
//         payload: post,
//     };
// }
