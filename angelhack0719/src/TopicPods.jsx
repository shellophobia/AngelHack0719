import React from 'react';
import './TopicPods.css';
import {times} from 'lodash';
import ChatBox from './ChatBox';

const TopicPods = (props) => {
  const [podOpen, setPodOpen] = React.useState(false);

  const handlePodClick = (index) => {
    setPodOpen(true);
  };

  return (
    <div style={{position: 'relative'}}>
      {
        times(10).map((val, index) => (
          <div className={`pod pod${(index+1)}`} key={`pod${index}`} onClick={() => handlePodClick(index)} />
        ))
      }
      {podOpen &&
      <div className="chatbox_wrapper">
        <ChatBox classes={props.classes} hasClose setPodOpen={setPodOpen} />
      </div>
      }
    </div>
  )
}

export default TopicPods;
