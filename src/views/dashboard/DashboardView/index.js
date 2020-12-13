import React from 'react';
import {
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
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
}));

const Dashboard = ({events}) => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          { events ? events.map(event => (
            <Grid
              item
              container
              key={event._id}
              lg={2}
            >
              <Card>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {event.at}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {event.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {event.url}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </Grid>
          )) : null }
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
