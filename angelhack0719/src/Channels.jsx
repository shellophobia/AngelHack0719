import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '320px',
    display: 'inline-block',
    margin: '5px 15px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Channels() {
  const classes = useStyles();
  return getCards(classes);
}


const getCards = (classes) => {
    const cardsData = [{
        header: 'Climate Change',
        body: 'Discuss the hazards of climate changes and steps to control it'
    }, {
        header: 'Trade War',
        body: 'Discuss the future of trade in this new world order'
    }, {
        header: 'Rise of Automation',
        body: 'Discuss the rise of automation and its impact on workforce'
    }, {
        header: 'The AI Apocalypse',
        body: 'Cannot AI prove to be an apocalypse and whats are the safegaurds needed'
    }, {
        header: 'The future of governance',
        body: 'How should our political systems and processes should change with time'
    }]
    return cardsData.map(thisData => (
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Channel
          </Typography>
          <Typography variant="h5" component="h2">
            {thisData.header}
          </Typography>
          <Typography variant="body2" component="p">
            {thisData.body}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Explore</Button>
        </CardActions>
      </Card>  
    ))

}