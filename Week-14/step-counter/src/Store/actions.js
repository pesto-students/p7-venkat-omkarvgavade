import { INCREASE_STEP_COUNT,RESET_STEP_COUNT } from "./actionType";

export const increaseStepCount=()=>{
    return {type: INCREASE_STEP_COUNT}
}
export const resetStepCount=()=>{
    return {type: RESET_STEP_COUNT}
}