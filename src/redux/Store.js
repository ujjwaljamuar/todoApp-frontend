import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducer from "./reducers/todoReducers";
import tabReducer  from "./reducers/tabReducer";

// create all the reducers you want in a json format
const reducer = combineReducers({
    todos: todosReducer,
    currentTab: tabReducer
});

// middleware
const middleware = [thunk];

// create store using redux
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
