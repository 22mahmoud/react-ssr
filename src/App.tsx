import { useState } from "react";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
