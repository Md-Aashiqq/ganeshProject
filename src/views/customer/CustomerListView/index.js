import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Divider
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import StockNotification from './StockNotification';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [stocks] = useState(data);

  const [editData, setEditData] = useState(null);

  const [addProduct, setAddProduct] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const getEditData = item => {
    console.log(item);
    setEditData(item);
    setShowEdit(true);
  };

  return (
    <Page className={classes.root} title="Stock">
      <Container maxWidth="lg">
        <Grid lg={12}>
          <div className="stockHeader">
            <div className="storeTitle">Kallidai Medical</div>
            <div className="addProduct">
              <Box display="flex" justifyContent="flex-end">
                {/* <Button className={classes.importButton}>Import</Button>
                <Button className={classes.exportButton}>Export</Button> */}
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setAddProduct(!addProduct);
                  }}
                >
                  {!addProduct ? 'Add Product' : 'Close'}
                </Button>
              </Box>
            </div>
          </div>
        </Grid>

        {addProduct && (
          <Grid lg={12}>
            <div>
              <form
                autoComplete="off"
                noValidate
                // className={clsx(classes.root, className)}
                // {...rest}
              >
                <Card>
                  <CardHeader subheader="Add Product" title="Product" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Medince Name"
                          name="medName"
                          // onChange={handleChange}
                          // required
                          // value={values.doctorName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="No of Pack"
                          name="pack"
                          // onChange={handleChange}
                          // required
                          // value={values.patientName}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Quantity"
                          name="quantity"
                          // onChange={handleChange}
                          // required
                          // value={values.medName}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="price"
                          name="price"
                          // onChange={handleChange}
                          // required
                          // value={values.price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Box display="flex" justifyContent="flex-end" p={2}>
                          <Button color="primary" variant="contained">
                            Add
                          </Button>
                        </Box>
                      </Grid>
                      {/* <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid> */}
                    </Grid>
                  </CardContent>
                  <Divider />
                </Card>
              </form>
            </div>
          </Grid>
        )}

        <Grid container spacing={3}>
          <Grid item lg={9} md={6} xs={12}>
            <Results stocks={stocks} getEditData={getEditData} />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            {showEdit && (
              <div className="editItemPanel">
                {/* <div className="editHeader">Edit Items</div> */}
                <div className="editForm">
                  <Grid lg={12}>
                    <div>
                      <form
                        autoComplete="off"
                        noValidate
                        // className={clsx(classes.root, className)}
                        // {...rest}
                      >
                        <Card>
                          <CardHeader
                            subheader="Edit Product"
                            title="Product"
                          />
                          <Divider />
                          <CardContent>
                            <Grid container spacing={3}>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Medince Name"
                                  name="medName"
                                  // onChange={handleChange}
                                  // required
                                  value={editData?.medName}
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="No of Pack"
                                  name="pack"
                                  // onChange={handleChange}
                                  // required
                                  value={editData?.pack}
                                  variant="outlined"
                                />
                              </Grid>

                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="Quantity"
                                  name="quantity"
                                  // onChange={handleChange}
                                  // required
                                  value={editData?.quantity}
                                  variant="outlined"
                                />
                              </Grid>

                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  label="price"
                                  name="price"
                                  // onChange={handleChange}
                                  // required
                                  value={editData?.rate}
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                  p={2}
                                >
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                      setShowEdit(false);
                                      setEditData(null);
                                    }}
                                  >
                                    Close
                                  </Button>
                                  <Button color="primary" variant="contained">
                                    Update
                                  </Button>
                                </Box>
                              </Grid>
                              {/* <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid> */}
                            </Grid>
                          </CardContent>
                          <Divider />
                        </Card>
                      </form>
                    </div>
                  </Grid>
                </div>
              </div>
            )}

            {!showEdit && <StockNotification />}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default CustomerListView;
