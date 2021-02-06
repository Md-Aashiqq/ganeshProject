import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import './bill.css';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

export default function Recpiet({ values, className, ...rest }) {
  const classes = useStyles();

  const [items, setItems] = useState([values]);
  const [hover, setHover] = useState(false);
  const [INDEX, setINDEX] = useState(0);
  const [Amount, setAmount] = useState(0);

  useEffect(() => {
    if (items.length < 0) {
      setItems([values]);
    } else {
      setItems(prev => [...prev, values]);
    }

    // setAmount(calcAmount());
  }, [values]);

  useEffect(() => {
    setAmount(calcAmount());
  }, [items]);

  const calcAmount = () => {
    console.log('sdasdsd', items);
    let sum = 0;
    if (values != undefined && values != null) {
      console.log('sdssdsa', values);
      items.map((item, i) => {
        // console.log(item);
        if (item != undefined && item != null) {
          if (Object.keys(item).length > 0) {
            sum = sum + item.price * item.quantity;
          }
        }
      });

      return sum;
    }
  };

  const clickHandler = ind => {
    setHover(!hover);
    setINDEX(ind);
  };

  const deleteHandler = ind => {
    console.log(ind);
    var filtered = items.filter(function(value, index) {
      return index != ind;
    });
    setItems(filtered);
  };

  const printHandler = () => {
    window.print();
  };

  const clearHandler = () => {
    setItems([]);
    setHover(false);
    setINDEX(0);
  };

  return (
    <div className="bill">
      <Card className={clsx(classes.root, className)} {...rest}>
        <div>
          <div
            className="header"
            style={{ padding: '10px', border: '1px solid blueviolet' }}
          >
            <div className="upperHeader">
              <div className="subHeader">
                <h5>Cell No: 7667651613</h5>
                <h5>D.L.No.TN-14-20-00550</h5>
              </div>
              <div className="subHeader">
                <h3>Kallidai Medical</h3>
                <h5>D.L.No.TN-14-21-00550</h5>
              </div>
              <div className="subHeader">
                <h6> 95/2 KAllidai </h6>
                <h5>GST: 33APYJ5760M1Z4</h5>
              </div>
            </div>
            <div className="midHeader">
              <div className="dateInfo">
                <h5>No:12</h5>
                <h5>Date:................</h5>
              </div>
              <h4 className="patientName">Name: {values?.patientName}</h4>
              <h4 className="doctorName">Doctor: {values?.doctorName}</h4>
            </div>
          </div>
          <div className="billField">
            <div className="itemsHeader">
              <h3 className="medName">Medicnce Name</h3>
              <h3 className="quantity">quantity</h3>
              <h3 className="price">Price</h3>
            </div>
            <div className="items">
              {items.length != 0 &&
                items.map((item, index) => {
                  return (
                    item != undefined && (
                      <div
                        className="item"
                        key={index}
                        onClick={() => {
                          clickHandler(index);
                        }}
                      >
                        <h4 className="medName"> {item?.medName} </h4>
                        <h4 className="quantity"> {item?.quantity} </h4>
                        <h4 className="price">
                          {' '}
                          {item?.price * item?.quantity}{' '}
                        </h4>
                        {hover && INDEX == index && (
                          <div
                            className="del"
                            onClick={() => {
                              deleteHandler(index);
                            }}
                          >
                            {' '}
                            D{' '}
                          </div>
                        )}
                      </div>
                    )
                  );
                })}
            </div>
          </div>
          <div className="totalField">
            <div className="totalHeading"> TOTAL + GST </div>

            <div className="totalAmount">
              <h4>{Amount}</h4>
            </div>
          </div>
          `
        </div>

        <div className="buttonGrp">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              clearHandler();
            }}
          >
            Clear
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              printHandler();
            }}
          >
            Print
          </Button>
        </div>
      </Card>
    </div>
  );
}
