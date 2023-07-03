import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import PoolsReducer from "./reducers/PoolsReducer";
import ManageStakingsReducer from "./reducers/ManageStakingsReducer";
import TransactionsReducer from "./reducers/TransactionsReducer";

import todoReducers from "./reducers/Reducers";
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: PostsReducer,
  pools: PoolsReducer,
  stakings: ManageStakingsReducer,
  transactions: TransactionsReducer,
  auth: AuthReducer,
  todoReducers,
  //form: reduxFormReducer,
});

//const store = createStore(rootReducers);

export const store = createStore(reducers, composeEnhancers(middleware));
