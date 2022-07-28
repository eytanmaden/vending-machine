import React, { useState, useContext } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import Context from "../context/Context";

export default function AddCoins() {
  const [oneDollarAmount, setOneDollarAmount] = useState(0);
  const [fiftyCentAmount, setFiftyCentAmount] = useState(0);
  const [twentyFCentAmount, setTwentyFCenAmount] = useState(0);
  const [tenCentAmount, setTenCentAmount] = useState(0);
  const [fiveCentAmount, setFiveCentAmount] = useState(0);
  const [oneCentAmount, setOneCentAmount] = useState(0);


  const handleAmountChange = () => {}

  const {
    oneDollarCoins,
    setOneDollarCoins,
    fiftyCentCoins,
    setFiftyCentCoins,
    twentyFCentCoins,
    setTwentyFCentCoins,
    tenCentCoins,
    setTenCentCoins,
    fiveCentCoins,
    setFiveCentCoins,
    oneCentCoins,
    setOneCentCoins,
    machineBalance,
    setMachineBalance,
  } = useContext(Context);

  const handleOneDollar = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setOneDollarAmount(roundedAmount);
  };

  const handleFiftyCents = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setFiftyCentAmount(roundedAmount);
  };

  const handleTwentyFCents = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setTwentyFCenAmount(roundedAmount);
  };

  const handleTenCents = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setTenCentAmount(roundedAmount);
  };

  const handleFiveCents = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setFiveCentAmount(roundedAmount);
  };

  const handleOneCent = (event) => {
    const amount = event.target.value;
    const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
    const roundedAmount = parseInt(roundedAmountString);
    setOneCentAmount(roundedAmount);
  };

  const handleCoinsSubmit = (event) => {
    setOneDollarCoins(oneDollarCoins+oneDollarAmount);
    setFiftyCentCoins(fiftyCentCoins+fiftyCentAmount);
    setTwentyFCentCoins(twentyFCentCoins+twentyFCentAmount);
    setTenCentCoins(tenCentCoins+tenCentAmount);
    setFiveCentCoins(fiveCentCoins+fiveCentAmount);
    setOneCentCoins(oneCentCoins+oneCentAmount);
    
    setOneDollarAmount(0);
    setFiftyCentAmount(0);
    setTwentyFCenAmount(0);
    setTenCentAmount(0);
    setFiveCentAmount(0);
    setOneCentAmount(0);

    event.preventDefault();
  };

  return (
    <div className="add-coins">
      <Container>
        <Col className="px-5 py-2 m-auto shadow-sm rounded-lg">
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Add Coins to the Machine
          </h1>
          <Form onSubmit={(event) => handleCoinsSubmit(event)}>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 1$ coins - Currently {oneDollarCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleOneDollar(event)}
                value={oneDollarAmount}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 50c coins - Currently {fiftyCentCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleFiftyCents(event)}
                value={fiftyCentAmount}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 25c coins  - Currently {twentyFCentCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleTwentyFCents(event)}
                value={twentyFCentAmount}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 10c coins - Currently {tenCentCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleTenCents(event)}
                value={tenCentAmount}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 5c coins - Currently {fiveCentCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleFiveCents(event)}
                value={fiveCentAmount}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount of 1c coins - Currently {oneCentCoins}</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleOneCent(event)}
                value={oneCentAmount}
              />
            </Form.Group>

            <div className="d-flex flex-column justify-content-between align-items-center">
              <Button variant="success btn-block my-3" type="submit">
                Add Coins
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </div>
  );
}
