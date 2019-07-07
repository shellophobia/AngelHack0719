import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import CallEndIcon from '@material-ui/icons/CallEnd';
import SendIcon from '@material-ui/icons/SendRounded';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CancelIcon from '@material-ui/icons/Cancel';
import {getToken, disconnectCall} from './CallHelper';
import Button from '@material-ui/core/Button';


export default function ChatBox(props) {
  const classes = props.classes;
  const [callActive, setCallActive] = React.useState(false);
  const handleCall = () => {
    setCallActive(true);
    getToken();
  }

  function handleHangup() {
    setCallActive(false);
    disconnectCall();
  }

  return (
    <div>
      {props.hasClose &&
        <div style={{position:'absolute', top: '-20px', right: '-20px'}} onClick={props.setPodOpen}>
          <IconButton className={classes.iconButton} aria-label="Phone">
            <CancelIcon />
          </IconButton>
        </div>
      }
      <AppBar position="static">
        <Toolbar>General</Toolbar>
      </AppBar>
      <div style={{height: '300px', overflow:'scroll'}}>
        <div>
          <List className={classes.rootList}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/426147275597938692/5fbbf7f2cb2c8690a559bca1b86ff3b8.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/473695279258796033/7311ad010351a3ba793eb4f4af301976.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/359017103552151578/44b41d40e36dc3f76aba8e8fbff1dadb.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/359017103552151578/44b41d40e36dc3f76aba8e8fbff1dadb.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem><Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/359017103552151578/44b41d40e36dc3f76aba8e8fbff1dadb.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem><Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/45934801_2073905522655365_5737526663311261696_n.jpg?_nc_cat=100&_nc_oc=AQljQHgPRegnTu79C5QQcEBdPNXwpOn8oSxD6UKc77RIwjf9PhEGUz8B-rXr7oBGx74&_nc_ht=scontent-sin6-2.xx&oh=e5e1433c0e4d32e63d35742ef9db6e4b&oe=5DC6572D" />
              </ListItemAvatar>
              <ListItemText
                primary="Shellophobia"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Suman Anand
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem><Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/232665580748931072/376e00fe4de1a6a4dbd1fb7db10117ef.png?size=256" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
      {props.hasClose ? (
        <div>
        {props.joined ? (
          <Paper className={classes.chatInput}>
          <InputBase
            className={classes.input}
            placeholder="What's on your mind?"
            inputProps={{ 'aria-label': "What's on your mind?" }}
          />
          <IconButton className={classes.iconButton} aria-label="Send">
            <SendIcon />
          </IconButton>
          <Divider className={classes.divider} />
          {callActive ? (
            <IconButton className={classes.iconButton} aria-label="Phone" onClick={handleHangup}>
              <CallEndIcon />
            </IconButton>) : (
              <IconButton className={classes.iconButton} aria-label="Phone" onClick={handleCall}>
                <CallIcon />
              </IconButton>
            )
          }
          {props.hasClose &&
            [<Divider className={classes.divider} />,
            <IconButton className={classes.iconButton} aria-label="Phone">
              <FullscreenIcon />
            </IconButton>]
          }
          </Paper>
        ): (
          <Button variant="contained" color="primary" style={{width: '100%'}} onClick={props.joinRoom}>
            Join Room
          </Button>
        )}
  </div>
      ):(
        <Paper className={classes.chatInput}>
          <InputBase
            className={classes.input}
            placeholder="What's on your mind?"
            inputProps={{ 'aria-label': "What's on your mind?" }}
          />
          <IconButton className={classes.iconButton} aria-label="Send">
            <SendIcon />
          </IconButton>
          <Divider className={classes.divider} />
          {callActive ? (
            <IconButton className={classes.iconButton} aria-label="Phone" onClick={handleHangup}>
              <CallEndIcon />
            </IconButton>) : (
              <IconButton className={classes.iconButton} aria-label="Phone" onClick={handleCall}>
                <CallIcon />
              </IconButton>
            )
          }
          {props.hasClose &&
            [<Divider className={classes.divider} />,
            <IconButton className={classes.iconButton} aria-label="Phone">
              <FullscreenIcon />
            </IconButton>]
          }
        </Paper>
      )}
    </div>
  )
}
