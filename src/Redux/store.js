import { createStore } from "redux";
import { routReducer } from "./Reducer";

export const store= createStore(routReducer);