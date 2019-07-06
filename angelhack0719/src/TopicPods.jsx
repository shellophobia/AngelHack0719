import React from 'react';
import './TopicPods.css';
import {times} from 'lodash';
import ChatBox from './ChatBox';

const TopicPods = (props) => {
  const handlePodClick = (index) => {
    console.log(index)
  };

  return (
    <div style={{position: 'relative'}}>
      {
        times(10).map((val, index) => (
          <div className={`pod pod${(index+1)}`} key={`pod${index}`} onClick={() => handlePodClick(index)} />
        ))
      }
      <div className="chatbox_wrapper">
        <ChatBox classes={props.classes} />
      </div>
    </div>
  )
}

export default TopicPods;
