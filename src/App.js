import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [counter1, setCounter1] = useState(0);

  const increment = () => {
    setCounter1(prevCounter => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
        Value: {counter1}
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
};

export default App;
