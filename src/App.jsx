import React, { useState } from 'react';
import Example from './Example';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Example></Example>
    </div>
  );
}

export default App;
