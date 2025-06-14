import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Make API call to backend root endpoint
    fetch('/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => setMessage(data))
      .catch((error) => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
