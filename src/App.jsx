import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice/counterSlice'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
    </>
  )
}

export default App
