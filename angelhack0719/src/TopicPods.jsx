import React from 'react';
import './TopicPods.css';
import Amplify, { API } from 'aws-amplify';
import Badge from '@material-ui/core/Badge';
import {times} from 'lodash';
import ChatBox from './ChatBox';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

class TopicPods extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      podOpen: false,
      rooms: [],
      joined: false,
    }
  }

  componentDidMount() {
    const apiName = 'roomsList';
    const path = '/topics/rooms';
    API.get(apiName, path, {})
      .then(response => {
        console.log(response);
        this.setState({
          rooms: response.rooms
        })
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  handlePodClick = () => {
    this.setState({
      podOpen: true,
    })
  }

  setPodClose = () => {
    this.setState({
      podOpen: false,
    })
  }

  joinRoom = () => {
    this.setState({
      joined: true,
    })
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        {
          times(10).map((val, index) => (
            <Badge color="secondary" className={`pod pod${(index+1)}`} invisible={index%2==0} onClick={this.handlePodClick} badgeContent={index*10}><div key={`pod${index}`}/><p className="roomName">{this.state.rooms[index]}</p></Badge>
          ))
        }
        {this.state.podOpen &&
        <div className="chatbox_wrapper">
          <ChatBox classes={this.props.classes} hasClose setPodOpen={this.setPodClose} joinRoom={this.joinRoom} joined={this.state.joined} />
        </div>
        }
      </div>
    )
  }
}

export default TopicPods;
