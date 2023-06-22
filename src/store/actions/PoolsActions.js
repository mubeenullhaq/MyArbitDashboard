import {
    createPool,
    formatPools,
    getPools,
    deletePool,
    updatePool
} from '../../services/PoolsService';
import {
    CONFIRMED_CREATE_POOL_ACTION,
    CONFIRMED_GET_POOL_ACTION,
    CONFIRMED_EDIT_POOL_ACTION,
    CONFIRMED_DELETE_POOL_ACTION,
} from './PoolsTypes';

export function getPoolsAction() {
    return (dispatch, getState) => {
        getPools().then((response) => {
            let pools = formatPools(response.data);
            dispatch(confirmedGetPoolsAction(pools));
        });
    };
}
export function confirmedGetPoolsAction(pools) {
    return {
        type: CONFIRMED_GET_POOL_ACTION,
        payload: pools,
    };
}


// export function createPostAction(postData, history) {
   
// 	return (dispatch, getState) => {
//         createPost(postData).then((response) => {
//             const singlePost = {
//                 ...postData,
//                 id: response.data.name,
//             };
//             dispatch(confirmedCreatePostAction(singlePost));
//             history.push('/postpage');
//         });
//     };
// }
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
