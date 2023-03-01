import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increaseStepCount,resetStepCount } from '../Store/actions';

function StepCounter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>You have walked {state.counter} steps today!</h1>
        <button onClick={()=>{
          dispatch(increaseStepCount())
        }}>Add a Step</button>
         <button onClick={()=>{
          dispatch(resetStepCount())
         }}>Reset a Step</button>
    </div>
  )
}

export default StepCounter