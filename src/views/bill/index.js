import React, { useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import AddBill from './AddBill';
import Recpiet from './Recpiet';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Bill = () => {
  const classes = useStyles();

  const [values, setValues] = useState();

  const setDetails = props => {
    setValues(props);
  };

  return (
    <Page className={classes.root} title="Account">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xs={12}>
            <AddBill setDetails={setDetails} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            {/* <ProfileDetails /> */}
            <Recpiet values={values} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Bill;
