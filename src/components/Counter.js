import React, { useState } from 'react'
import { useCounterSelector , incremented,decremented,incrementedByValue,reset} from '../reducers/counter/counterSlice'
import { useSelector ,useDispatch} from 'react-redux'
const Counter = () => {
    const count = useSelector(useCounterSelector)
    const dispatch = useDispatch()
    const [incrementByValue, setIncrementByValue] = useState(1)
  return (
    <div className='container-fluid text-center mt-5'>
    <div className='row mb-3'>
    <div className='col-12'>Counter : {count}</div>
    </div>
    <div className='row mb-3 justify-content-center gap-1'>
        <button className='btn btn-outline-primary col-2' onClick={()=>dispatch(incremented())}>Increment</button>
        <button className='btn btn-outline-primary col-2' onClick={()=>dispatch(decremented())}>Decrement</button>
        <button className='btn btn-outline-primary col-2' onClick={()=>dispatch(reset())}>Reset</button>
    </div>
    <div className='row mb-3 justify-content-center gap-1'>
        <input type="number" className='b-0 col-2' value={incrementByValue} onChange={(e)=>setIncrementByValue(Number(e.target.value))}/>
        <button className='btn btn-outline-primary col-2' onClick={()=>dispatch(incrementedByValue(incrementByValue))}>Increment By Value</button>
    </div>
    </div>
  )
}

export default Counter