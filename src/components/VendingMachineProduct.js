import React, { useContext, useState} from 'react';
import { Button } from "react-bootstrap";
import Context from '../context/Context';
import EditProduct from './EditProduct';


export default function VendingMachineProduct(props) {
  const { product } = props;
  const { name, price, amount, id } = product;
  const { productsList, setProductsList, myBalance, setMyBalance, cart, setCart } = useContext(Context);

  const handleAdd = (event) => {
    setMyBalance(myBalance-price);
    const boughtProduct = {
      name: name,
      price: price,
      amount: amount - 1,
      id: id,
    };
    const foundIndex = productsList.findIndex((item) => item.id === id);
    productsList[foundIndex] = boughtProduct;
    const updatedProductsList = [...productsList];
    setProductsList(updatedProductsList);
    const myCart = [...cart];
    myCart.push(boughtProduct)
    setCart(myCart);
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{amount}</td>
        {(amount && myBalance >= price) ? (
          <td>
            <Button variant="success" onClick={(event) => handleAdd(event)}>
              +
            </Button>
          </td>
        ) : (
          <td>
            <Button variant="success" disabled>
              +
            </Button>
          </td>
        )}
      </tr>
    </>
  );
}
