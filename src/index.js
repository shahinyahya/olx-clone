import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { FirebaseContext } from './store/FirebaseContext'
// import { app } from './firebase-backend/config'
import Context from './store/Contexts'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>
);

