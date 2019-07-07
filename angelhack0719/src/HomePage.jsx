import React from 'react';
import Header from './Header';
import logo from './speech.png';
import Channels from './Channels'

export default function() {
  return (
    <div className="App">
      <Header openDrawer={() => {}} />
      <header className="App-header">
      <div className="spandiv">
        <p>
          <h1 > KLAT </h1>
          <h3> Discuss your ideas, share your views, describe your stories and listen to others experiences </h3>
        </p>
      </div>
      </header>
      <Channels />
    </div>
  )
}
