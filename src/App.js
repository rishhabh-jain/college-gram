import React from "react";
import Form from './Form'
import "./App.css";
import Login from './Login'

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Login/>
      {/* <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </>
  );
}

export default App;
