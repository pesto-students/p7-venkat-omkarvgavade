import { INCREASE_STEP_COUNT ,RESET_STEP_COUNT} from "./actionType";

const initState = {
    counter:0
}

export const stepCounterReducer=(state=initState, action) =>{
    switch(action.type){
        case INCREASE_STEP_COUNT:
            return {counter:state.counter+1};
        case RESET_STEP_COUNT:
            return {counter:0};
        default:
            return state;
    }
}