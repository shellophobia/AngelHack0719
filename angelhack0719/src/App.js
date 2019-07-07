import React from 'react';
import Amplify, { API } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import awsconfig from './aws-exports';
import AppRouter from './AppRouter';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  const apiName = 'angelhack';
  const path = '/channels';
  // API.get(apiName, path, {})
  //   .then(response => {
  //     // Add your code here
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error.response);
  //   });
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1 }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
