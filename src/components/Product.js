import React, { useContext, useState} from 'react';
import { Button } from "react-bootstrap";
import Context from '../context/Context';
import EditProduct from './EditProduct';


export default function Product(props) {
  const { product } = props;
  const { name, price, amount, id } = product;
  const [modalShow, setModalShow] = useState(false);

  const handleEditButton = (event) => {
    setModalShow(true);
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{amount}</td>
        <td>
          <Button variant="success" onClick={(event) => handleEditButton(event)}>Edit</Button>
        </td>
      </tr>
      {modalShow && <EditProduct modalShow={modalShow} setModalShow={setModalShow} product={product}/>}
    </>
  );
}
