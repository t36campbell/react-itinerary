import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import API from '../../../utils/api';
import { Home as HomeIcon } from 'react-feather';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ setTrips, onMobileClose, openMobile, trips, user }) => {
  
  const classes = useStyles();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [tripName, setTripName] = useState();

  const createTrip = () => {
    API.post(`createTrip`, {
        user: '284633851133690372',
        name: tripName
    }).then(res => {
      let newTrip = {
        _id: res.data._id,
        name: res.data.name,
      };
      setTrips(trips => [...trips, newTrip])
      });
    handleClose();
  }
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src='/static/images/avatars/avatar_6.png'
          to="/app/account"
        />
        <Typography 
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          { trips ? trips.map(trip => (
            <NavItem
              href='/app/dashboard'
              key={trip._id}
              title={trip.name}
              icon={HomeIcon}
            />
          )) : null }

          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Create a Trip
          </Button>
        </List>
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
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={createTrip} color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          { user ? content : null }
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  user: PropTypes.any
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
  user: []
};

export default NavBar;
