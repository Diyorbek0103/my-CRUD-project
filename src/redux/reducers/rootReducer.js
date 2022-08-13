import { combineReducers } from "redux";
import { counterReducer } from "./projectReducer";
import { hookCounterReducer } from "./hookCounterReducer";
import { studentCrudReducer } from "./studentCrudReducer";
import { employeesReducer } from "./employeesreducer";
export const rootReducer = combineReducers({
  counterReducer,
  hookCounterReducer,
  studentCrudReducer,
  employeesReducer,
});
