const withCounterState = withState('counter', 'setCounter', 0)

const Counter = ({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter(n => n + 1)}>Increment</button>
    <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
  </div>
)

const CounterWithState = withCounterState(Counter)
