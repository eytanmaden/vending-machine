import React, { useState, useContext } from 'react';
import { Col, Container, Form, Button } from "react-bootstrap";
import Context from '../context/Context';




export default function MyBalance() {
  const { 
    oneDollarCoins, setOneDollarCoins,
    fiftyCentCoins, setFiftyCentCoins,
    twentyFCentCoins, setTwentyFCentCoins,
    tenCentCoins, setTenCentCoins,
    fiveCentCoins, setFiveCentCoins,
    oneCentCoins, setOneCentCoins,
    myBalance, setMyBalance,
    machineBalance, setMachineBalance
  } = useContext(Context);

  const handleOneDollar = () => {
    setOneDollarCoins(oneDollarCoins+1);
    setMyBalance(myBalance+1);
  }
  
  const handleFiftyCents = () => {
    setFiftyCentCoins(fiftyCentCoins+1);
    setMyBalance(myBalance + 0.5);
  };

  const handleTwentyFCents = () => {
    setTwentyFCentCoins(twentyFCentCoins+1);
    setMyBalance(myBalance + 0.25);
  };

  const handleTenCents = () => {
    setTenCentCoins(tenCentCoins+1);
    setMyBalance(myBalance + 0.1);
  };

  const handleFiveCents = () => {
    setFiveCentCoins(fiveCentCoins+1);
    setMyBalance(myBalance + 0.05);
  };

  const handleOneCent = () => {
    setOneCentCoins(oneCentCoins+1);
    setMyBalance(myBalance + 0.01);
  };
  
  return (
    <div className="my-balance">
      <div>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="px-5 py-2 m-auto shadow-sm rounded-lg my-bal-col"
        >
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Insert Money Here
          </h1>
          <Button
            className="m-2 money"
            variant="success"
            size="lg"
            onClick={handleOneDollar}
          >
            1$
          </Button>
          <Button
            className="m-2 money"
            variant="success"
            onClick={handleFiftyCents}
            size="lg"
          >
            50c
          </Button>
          <Button
            className="m-2 money"
            variant="success"
            onClick={handleTwentyFCents}
            size="lg"
          >
            25c
          </Button>
          <Button
            className="m-2 money"
            variant="success"
            onClick={handleTenCents}
            size="lg"
          >
            10c
          </Button>
          <Button
            className="m-2 money"
            variant="success"
            onClick={handleFiveCents}
            size="lg"
          >
            5c
          </Button>
          <Button
            className="m-2 money"
            variant="success"
            onClick={handleOneCent}
            size="lg"
          >
            1c
          </Button>
        </Col>
      </div>
    </div>
  );
}
