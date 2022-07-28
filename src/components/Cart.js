import React, { useState, useContext } from "react";
import { Col, Container, Form, Button, ListGroup } from "react-bootstrap";
import Context from "../context/Context";
import { v4 as uuid } from "uuid";
import swal from "sweetalert";
import CartItem from "./CartItem";

export default function Cart() {
  const oneDollarChange = 1;
  const fiftyCentChange = 0.5;
  const twentyFCentChange = 0.25;
  const tenCentChange = 0.1;
  const fiveCentChange = 0.05;
  const oneCentChange = 0.01;
  const [change, setChange] = useState([]);

  
  const {
    cart,
    setCart,
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
    myBalance,
    setMyBalance,
  } = useContext(Context);

  let oneDollarAmount = oneDollarCoins;
  let fiftyCentAmount = fiftyCentCoins;
  let twentyFCentAmount = twentyFCentCoins;
  let tenCentAmount = tenCentCoins;
  let fiveCentAmount = fiveCentCoins;
  let oneCentAmount = oneCentCoins;



  const handleApproveTransaction = () => {
    let ch = change;
    let bal = myBalance;
    while(bal > 0.01){
      if (oneDollarAmount && bal > 1) {
        ch.push(oneDollarChange);
        setChange(ch);
        oneDollarAmount = oneDollarAmount - 1;
        setOneDollarCoins(oneDollarAmount);
        bal = bal - 1
        setMyBalance(bal);
      } else if (fiftyCentAmount && bal > 0.5) {
        ch.push(fiftyCentChange);
        setChange(ch);
        fiftyCentAmount = fiftyCentAmount - 1;
        setFiftyCentCoins(fiftyCentAmount);
        bal = bal - 0.5
        setMyBalance(bal);
      } else if (twentyFCentAmount && bal > 0.25) {
        ch.push(twentyFCentChange);
        setChange(ch);
        twentyFCentAmount = twentyFCentAmount - 1;
        setTwentyFCentCoins(twentyFCentAmount);
        bal = bal - 0.25
        setMyBalance(bal);
      } else if (tenCentAmount && bal > 0.1) {
        ch.push(tenCentChange);
        setChange(ch);
        tenCentAmount = tenCentAmount - 1;
        setTenCentCoins(tenCentAmount);
        bal = bal - 0.1
        setMyBalance(bal);
      } else if (fiveCentAmount && bal > 0.05) {
        ch.push(fiveCentChange);
        setChange(ch);
        fiveCentAmount = fiveCentAmount - 1;
        setFiveCentCoins(fiveCentAmount);
        bal = bal - 0.05;
        setMyBalance(bal);
      } else if (oneCentAmount && bal > 0.01) {
        ch.push(oneCentChange);
        setChange(ch);
        oneCentAmount = oneCentAmount - 1;
        setOneCentCoins(oneCentAmount);
        bal = bal - 0.01
        setMyBalance(bal);
      }
    }

    const changeOneDollar = ch.filter(item => item === 1).length;
    const changeFiftyCent = ch.filter(item => item === 0.5).length;
    const changeTwentyFCent = ch.filter((item) => item === 0.25).length;
    const changeTenCent = ch.filter((item) => item === 0.1).length;
    const changeFiveCent = ch.filter((item) => item === 0.05).length;
    const changeOneCent = ch.filter((item) => item === 0.01).length;

    swal(
      "Success!",
      `CHANGE: ${changeOneDollar} x 1$, ${changeFiftyCent} x 50c, ${changeTwentyFCent} x 25c, ${changeTenCent} x 10c, ${changeFiveCent} x 5c, ${changeOneCent} x  1c  `,
      "success"
    );
    setCart([]);

    

  }



  return (
    <div className="add-product">
      <Container>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="px-5 py-2 m-auto shadow-sm rounded-lg cart-col"
        >
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            My Cart
          </h1>
          <div className="d-flex flex-column justify-content-between cart-inner-wrap">
            <div>
              {cart.length ? (
                <tbody className="d-flex flex-row flex-wrap">
                  {cart?.map((item, index) => (
                    <CartItem product={item} />
                  ))}
                </tbody>
              ) : (
                <h1>NO PRODUCTS TO SHOW</h1>
              )}
            </div>
            <Button
              className="approve-btn d-flex flex-column justify-content-between align-items-center"
              variant="success btn-block my-3"
              onClick={handleApproveTransaction}
            >
              Approve
            </Button>
          </div>
        </Col>
      </Container>
    </div>
  );
}
