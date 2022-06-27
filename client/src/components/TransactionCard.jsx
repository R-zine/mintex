import React from "react";

import { shorten } from "../utils/shorten";

const TransactionCard = ({ addressTo, addressFrom, message, amount }) => {
  return (
    <div
      className="transaction-card"
      style={{
        backgroundColor: `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
          Math.random() * 255
        )}, ${Math.ceil(Math.random() * 255)}`,
      }}
    >
      <h4>Sender: {shorten(addressFrom)}</h4>
      <h4>Receiver: {shorten(addressTo)}</h4>
      <h4>Amount sent: {amount}</h4>
      <h4>Message: {message}</h4>
    </div>
  );
};

export default TransactionCard;
