import { combineReducers } from "redux";

import todosReducer from "./reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
});

export default rootReducer;