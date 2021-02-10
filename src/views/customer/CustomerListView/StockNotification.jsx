import React, { useState } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';
// import Page from 'src/components/Page';
// import Results from './Results';
// import Toolbar from './Toolbar';
// import data from './data';

import './style.css';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StockNotification = () => {
  //   const classes = useStyles();
  //   const [stocks] = useState(data);

  return (
    <div className="notificationPanel" style={{ padding: '10px' }}>
      <div className="notifiHeding"> Low Stock Items </div>
      <div className="notiItem">
        <div className="notiContent">
          <div className="itemName">
            {' '}
            <span className="subHeading">Name:</span> Life Box
          </div>
          <div className="itemQuantity">
            {' '}
            <span className="subHeading">Quantity:</span> 20{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockNotification;
