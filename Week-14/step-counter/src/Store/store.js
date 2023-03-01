import { stepCounterReducer } from "./stepCounterReducer";
import { createStore } from 'redux'


export const store = createStore(stepCounterReducer);