
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh', paddingTop: '50px' }}>
      <App />
    </div>
  </React.StrictMode>
);
