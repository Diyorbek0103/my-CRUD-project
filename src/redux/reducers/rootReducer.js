import { combineReducers } from "redux";
import { counterReducer } from "./projectReducer";
import { hookCounterReducer } from "./hookCounterReducer";
export const rootReducer = combineReducers({
  counterReducer,
  hookCounterReducer,
});
