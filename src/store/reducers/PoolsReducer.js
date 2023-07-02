import {
    CONFIRMED_GET_POOL_ACTION,
    CONFIRMED_GET_POOL_REQUEST_ACTION,
    } from '../actions/PoolsTypes';

const initialState = {
    pools: [],
    isLoading: true,
    error: null
};

export default function PoolsReducer(state = initialState, action) {
    switch (action.type) {
        case CONFIRMED_GET_POOL_REQUEST_ACTION:
          return {
            ...state,
            isLoading: true,
            error: null,
          };
        case CONFIRMED_GET_POOL_ACTION:
          return {
            ...state,
            pools: action.payload,
            isLoading: false,
          };
        // case FETCH_DATA_FAILURE:
        //   return {
        //     ...state,
        //     isLoading: false,
        //     error: action.payload,
        //   };
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
