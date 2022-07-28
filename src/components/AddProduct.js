import React, { useState, useContext } from 'react';
import { Col, Container, Form, Button } from "react-bootstrap";
import Context from '../context/Context';
import { v4 as uuid } from "uuid";
import swal from "sweetalert";



export default function AddProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const { productsList, setProductsList } = useContext(Context);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value); 
  };

  const handleProductSubmit = (event) => {
    if(name === '' || price === 0 || amount === 0){
      swal("Oops!", "Please fill all the inputs", "error");

    } else {
      const roundedPriceString = (Math.round(price * 100) / 100).toFixed(2);
      const roundedPrice = parseFloat(roundedPriceString);
      const roundedAmountString = (Math.round(amount * 100) / 100).toFixed(0);
      const roundedAmount = parseInt(roundedAmountString);
      const uniqueId = uuid();
      const updatedProductsList = [...productsList];
      const newProduct = {
        name: name,
        price: roundedPrice,
        amount: roundedAmount,
        id: uniqueId,
      };
      updatedProductsList.push(newProduct);
      setProductsList(updatedProductsList);
      setName("");
      setPrice(0);
      setAmount(0);
    }
    event.preventDefault();
  };

  return ( 
    <div className='add-product'>
      <Container>
        <Col
          className="px-5 py-2 m-auto shadow-sm rounded-lg add-prod-col"
        >
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Add Product
          </h1>
          <Form onSubmit={(event) => handleProductSubmit(event)}>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => handleNameChange(event)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step={0.01}
                onChange={(event) => handlePriceChange(event)}
                value={price}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                step={1}
                onChange={(event) => handleAmountChange(event)}
                value={amount}
              />
            </Form.Group>

            <div className="d-flex flex-column justify-content-between align-items-center">
              <Button variant="success btn-block my-3" type="submit">
                Add Product
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </div>
  );
}
