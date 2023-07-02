import {
    CONFIRMED_GET_STAKINGS_ACTION,
    GET_STAKINGS_FAILED_ACTION,
    LOADING_TOGGLE_ACTION
    } from '../actions/ManageStakingTypes';

const initialState = {
    stakings: null,
    error: null,
    showLoading: false,
};

export default function ManageStakingsReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_TOGGLE_ACTION:
          return {
            ...state,
            showLoading: action.payload,
          };
        case CONFIRMED_GET_STAKINGS_ACTION:
          return {
            ...state,
            stakings: action.payload,
            showLoading: false,
          };
        case GET_STAKINGS_FAILED_ACTION:
          return {
            ...state,
            showLoading: false,
            error: action.payload,
          };
        default:
          return state;
      }
    // if (actions.type === CONFIRMED_GET_POOL_ACTION) {
    //     return {
    //         ...state,
    //         pools: actions.payload,
    //     };
    // }

    // if (actions.type === CREATE_POST_ACTION) {
    //     const post = {
    //         id: Math.random(),
    //         title: 'Post Title 2asdasd',
    //         description: 'Sample Description 2asdasdas',
    //     };

    //     const posts = [...state.posts];
    //     posts.push(post);
    //     return {
    //         ...state,
    //         posts,
    //     };
    // }

    // if (actions.type === CONFIRMED_DELETE_POST_ACTION) {
    //     const posts = [...state.posts];
    //     const postIndex = posts.findIndex(
    //         (post) => post.id === actions.payload,
    //     );

    //     posts.splice(postIndex, 1);

    //     return {
    //         ...state,
    //         posts,
    //     };
    // }

    // if (actions.type === CONFIRMED_EDIT_POST_ACTION) {
    //     const posts = [...state.posts];
    //     const postIndex = posts.findIndex(
    //         (post) => post.id === actions.payload.id,
    //     );

    //     posts[postIndex] = actions.payload;
    //     return {
    //         ...state,
    //         posts,
    //     };
    // }

    // if (actions.type === CONFIRMED_CREATE_POST_ACTION) {
    //     const posts = [...state.posts];
    //     posts.push(actions.payload);

    //     return {
    //         ...state,
    //         posts,
    //     };
    // }

    //return state;
}
