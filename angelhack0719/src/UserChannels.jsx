import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Header from './Header';
import TopicPods from './TopicPods';
import ChatBox from './ChatBox';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  markup: {
    fontSize: '0.9375rem',
    lineHeight: '1.3',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  }
}));

const openTopics = [
  'rules-and-regulations',
  'general',
  'announcements',
  'spellbreak-discussion',
  'miscellaneous'
];

const closedTopics = [
  'AFK',
  'squad-7',
  'squad-8',
  'squad-10'
];

const UserChannels = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [currIndex, setIndex] = React.useState(0);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleTopicSelect(index) {
    setIndex(index)
  }
  return (
    <div>
      <Header openDrawer={handleDrawerOpen} />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'flex-end'}}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {openTopics.map((text, index) => (
              <ListItem button key={text} selected={index===currIndex} onClick={() => handleTopicSelect(index)} >
                <ListItemIcon><LockOpenIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {closedTopics.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon><LockIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
        {currIndex === 0 && (
          <div className={classes.markup}>
          <strong>WELCOME TO THE OFFICIAL SPELLBREAK DISCORD!</strong>

          <em style={{display: 'block', margin: '20px 0'}}>This is an English language server. Please use a translation service like Google Translate <a title="https://translate.google.com/" className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://translate.google.com/" rel="noreferrer noopener" target="_blank" role="button">https://translate.google.com/</a> if you are unable to communicate in English.</em>

          <p>The official Spellbreak Discord server is a vibrant hub for the game’s players and community to discuss Spellbreak and other interesting topics and—above all else—somewhere to have a good time with fellow members. It is of utmost importance that we foster a welcoming environment for civil discourse where everyone enjoys participating. Let’s all work together to keep it that way!
          </p>

          <p>Spellbreak is made by Proletariat Inc, a game studio located in Boston, MA, whose mission is to deliver groundbreaking multiplayer titles focused on outstanding player-first experiences. You can find out more about the studio at <a title="https://proletariat.com/" className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://proletariat.com/" rel="noreferrer noopener" target="_blank" role="button">https://proletariat.com/</a>.</p>

          <p>==========</p>

          <p><u><strong>Moderation Team:</strong></u></p>

          Elders are community members who have been selected to act as community moderators as well as discussion facilitators while Sages are community mentors who guide new players as well as veterans who have questions about gameplay or are looking to improve. Apprentices are Elders and Sages in training.</div>
        )}
          {currIndex === 1 && (<ChatBox classes={classes} />)}
          {currIndex === 2 && <TopicPods classes={classes} />}
        </main>
      </div>
    </div>
  )
}

export default UserChannels;
