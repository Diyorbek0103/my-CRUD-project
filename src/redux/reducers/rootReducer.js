import { combineReducers } from "redux";
import { counterReducer } from "./projectReducer";
import { hookCounterReducer } from "./hookCounterReducer";
import { studentCrudReducer } from "./studentCrudReducer";
export const rootReducer = combineReducers({
  counterReducer,
  hookCounterReducer,
  studentCrudReducer,
});
