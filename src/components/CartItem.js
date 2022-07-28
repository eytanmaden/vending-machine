import React, { useContext } from 'react';
import { Col, Container, Form, Button, ListGroup } from "react-bootstrap";
import Context from "../context/Context";


export default function CartItem(props) {
  const { product } = props;
  let { name, price, amount, id} = product;
  const { cart, setCart, productsList, setProductsList, myBalance, setMyBalance } = useContext(Context);
  
  const handleRemoveFromCart = () => {
    const productRemoved = productsList.find((item) => item.id === id);
    productRemoved.amount++;
    const foundIndex = productsList.findIndex((item) => item.id === id);
    productsList[foundIndex] = productRemoved;
    const updatedProductsList = [...productsList];
    setProductsList(updatedProductsList);

    const foundIndexCart = cart.findIndex((item) => item.id === id);
    if (foundIndexCart > -1) {
      cart.splice(foundIndexCart, 1);
    }
    const updatedCart = [...cart];
    setCart(updatedCart);

    setMyBalance(myBalance+price);
  }


  return (
    <ListGroup>
      <ListGroup.Item className="d-flex flex-column justify-content-between m-1">
        <div>Name: {name} </div>
        <br />
        <div>Price: {price} </div>
        <Button className="my-2" variant="danger" onClick={handleRemoveFromCart}>
          Remove
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
