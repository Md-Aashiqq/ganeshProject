import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

import { useDataLayerValue } from '../../Datalayer';

const useStyles = makeStyles(() => ({
  root: {}
}));

export default function AddBill({ setDetails, className, ...rest }) {
  const classes = useStyles();

  const [{ data }, dispatch] = useDataLayerValue();

  const [values, setValues] = useState({
    doctorName: '',
    patientName: '',
    medName: '',
    quantity: '',
    price: ''
  });

  const [autocmp, setAutocmp] = useState(false);

  const [medNameArray, setMedNameArray] = useState([]);

  const [autocrtArray, setAutocrtArray] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setMedNameArray(getKeys());
    }
  }, [data]);

  const handleChange = event => {
    // console.log(data);
    // dispatch({ type: 'PUTDATA', load: { detol: 20 } });
    if (event.target.name === 'medName') {
      setAutocmp(true);
      autoCrt(event.target.value);
      if (event.target.value === '') {
        setAutocrtArray([]);
        setAutocmp(false);
      }
    }
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getKeys = () => {
    const key = [];
    data.map((item, i) => {
      key.push(Object.values(item)[0]);
    });
    console.log(key);
    return key;
  };

  const onItemClick = item => {
    console.log(item);
    setValues({
      ...values,
      ['medName']: item,
      ['price']: getPrice(item)
    });
    setAutocmp(false);
    console.log(getPrice(item));
  };

  const getPrice = name => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].medName === name) {
        return data[i].price;
      }
    }
  };

  const autoCrt = query => {
    var reg = new RegExp(
      query
        .split('')
        .join('\\w*')
        .replace(/\W/, ''),
      'i'
    );
    const fil = medNameArray.filter(function(it) {
      return it.match(reg);
    });
    setAutocrtArray(fil);
  };

  return (
    <div>
      <form
        autoComplete="off"
        noValidate
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Card>
          <CardHeader subheader="Add Bill" title="Bill" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the Doctor name"
                  label="Doctor Name"
                  name="doctorName"
                  onChange={handleChange}
                  required
                  value={values.doctorName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Patient name"
                  name="patientName"
                  onChange={handleChange}
                  required
                  value={values.patientName}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  onMouseOver={() => {
                    setAutocmp(false);
                  }}
                  fullWidth
                  label="Med name"
                  name="medName"
                  onChange={handleChange}
                  required
                  value={values.medName}
                  variant="outlined"
                />
                {autocmp && (
                  <div className="autoDiv">
                    {autocrtArray.map((item, index) => {
                      return (
                        <div
                          className="autoItem"
                          key={index}
                          onClick={() => {
                            onItemClick(item);
                          }}
                        >
                          {item}
                        </div>
                      );
                    })}
                    {/* <div className="autoItem">AShuick</div>
                  <div className="autoItem">AShuick</div> */}
                  </div>
                )}
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Quatiny"
                  name="quantity"
                  onChange={handleChange}
                  type="number"
                  value={values.quantity}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="price"
                  name="price"
                  onChange={handleChange}
                  required
                  value={values.price}
                  variant="outlined"
                />
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
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setDetails(values);
                setValues({
                  doctorName: values.doctorName,
                  patientName: values.patientName,
                  medName: '',
                  quantity: '',
                  price: ''
                });
                // console.log(values);
              }}
            >
              Add
            </Button>
          </Box>
        </Card>
      </form>
    </div>
  );
}
