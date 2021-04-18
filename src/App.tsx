import React, { useEffect, useState } from 'react';

import Home from './features/Home';
import Two from './features/Two';
// import logo from './logo.svg';
// import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Two />
      </header>
    </div>
  );
}

export default App;
