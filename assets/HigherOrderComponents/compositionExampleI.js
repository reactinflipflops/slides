const enhanceWithState = withState('counter1', 'setCounter', 0)
const enhanceWithReducer = withReducer('counter2', 'dispatch', counterReducer, 0)

const Counter = ({ counter, dispatch }) => (
  <div>
    Count: {counter}
    <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
    <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
  </div>
)

const EnhancedCounter = enhanceWithReducer(enhanceWithState(Counter))
