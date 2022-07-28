import React, { useState, useContext } from "react";
import { Col, Container, Table, Button } from "react-bootstrap";
import Context from "../context/Context";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import VendingMachineProduct from "./VendingMachineProduct";

export default function VendingMachine() {
  const { productsList, setProductsList } = useContext(Context);

  return (
    <div className="products-list-vending">
      <div>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="px-5 py-2 m-auto shadow-sm rounded-lg vending-col"
        >
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Vending Machine
          </h1>
          <Table striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            {productsList.length ? (
              <tbody>
                {productsList?.map((item, index) => (
                  <VendingMachineProduct key={item.id} product={item} />
                ))}
              </tbody>
            ) : (
              <h1>NO PRODUCTS TO SHOW</h1>
            )}
          </Table>
        </Col>
      </div>
    </div>
  );
}
