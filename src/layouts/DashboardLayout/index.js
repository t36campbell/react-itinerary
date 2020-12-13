import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import DashboardView from '../../views/dashboard/DashboardView';
import NavBar from './NavBar';
import TopBar from './TopBar';
import API from '../../utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [user, setUser] = useState();
  const [trips, setTrips] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    API.post(`getUser`, {
        _id: '284633851133690372'
    }).then(res => {
        setUser(res.data);
        setTrips(res.data.trips.data);
        setEvents(res.data.events.data);
      });
  }, []);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        trips={trips}
        user={user}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
          <DashboardView events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
