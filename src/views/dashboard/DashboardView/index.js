import React, { useState } from 'react';
import {
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import API from '../../../utils/api';

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
  card: {
    minWidth: 300
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Dashboard = ({ setEvents, events}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [eventName, setEventName] = useState();
  const [eventAt, setEventAt] = useState();
  const [eventDescription, setEventDescription] = useState();
  const [eventURL, setEventURL] = useState();
  // const [eventTrip, setEventTrip] = useState();
  // const [eventUser, setEventUser] = useState();

  const createEvent = () => {
    API.post(`createEvent`, {
      name: eventName,
      at: eventAt,
      description: eventDescription,
      url: eventURL,
      trip: "284753577831825926",
      user: "284633851133690372"
    }).then(res => {
      let newEvent = {
        _id: res.data._id,
        name: res.data.name,
        at: res.data.at,
        description: res.data.description,
        url: res.data.url,
      };
      setEvents(events => [...events, newEvent])
      });
    handleClose();
  }

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
          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
              Create an Event
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText>
              <form noValidate autoComplete="off">
                <TextField
                  autoFocus
                  name="Name"
                  label="Name"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  name="At"
                  label="At"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  value={eventAt}
                  onChange={(e) => setEventAt(e.target.value)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  name="Description"
                  label="Description"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  name="URL"
                  label="URL"
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                  value={eventURL}
                  onChange={(e) => setEventURL(e.target.value)}
                  fullWidth
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={createEvent} color="secondary">
                Create
              </Button>
            </DialogActions>
          </Dialog>

          { events ? events.map(event => (
            <Grid
              item
              container
              key={event._id}
              lg={3}
              md={6}
              sm={12}
            >
              <Card className={classes.card}>
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
