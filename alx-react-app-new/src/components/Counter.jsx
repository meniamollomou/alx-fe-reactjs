import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', maxWidth: '300px' }}>
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '5px' }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
