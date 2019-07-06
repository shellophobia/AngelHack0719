import React from 'react';
import Header from './Header';
import logo from './speech.png';
import agent from 'superagent';

function getToken() {
  var url = "https://violet-barnacle-3299.twil.io/capability-token";
  agent.get(url)
  .then(response => {
    const token = response.body.token
    console.log("token =" , token);
    const Twilio = window.Twilio
    const device = new Twilio.Device();
    console.log("device = ", device);
    device.setup(token);

    window.setTimeout(() => {
      const activeConn = device.connect();
      window.callDetails = { 
        activeConn
       };
    }, 4 * 1000) 
  })
}

function disconnectCall() {
  window.callDetails &&
  window.callDetails.activeConn && 
  window.callDetails.activeConn.disconnect();
}

export default function() {
  return (
    <div className="App">
      <Header openDrawer={() => {}} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img 
          src="http://simpleicon.com/wp-content/uploads/phone-symbol-2-128x128.png"
          onClick={() => getToken()}
        />
        <img 
          src="https://cdn1.iconfinder.com/data/icons/jetflat-devices-vol-5/90/0094_005_phone_decline_hangup_hang_up-128.png"
          onClick={() => disconnectCall()}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
