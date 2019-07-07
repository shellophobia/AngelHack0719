import React from 'react';
import './TopicPods.css';
import Badge from '@material-ui/core/Badge';
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
          <Badge color="secondary" className={`pod pod${(index+1)}`} invisible={index%2==0} onClick={() => handlePodClick(index)} badgeContent={index*10}><div key={`pod${index}`}/></Badge>
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
