import React, { useState } from 'react';

function Counter() {
  const [count, setCounter] = useState<number>(0)

  const onIncrease = () => setCounter(prevCount => prevCount + 1)
  const onDecrease = () => setCounter(prevCount => prevCount - 1)

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;