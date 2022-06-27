import React, { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { shorten } from "../utils/shorten";
import { Loader } from "./";
import logo from "../../images/logo.png";

import Input from "./Input";

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionsContext);

  const { addressTo, message, amount, keyword } = formData;

  const handleSubmit = (e) => {
    const { addressTo, message, amount, keyword } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !message || !keyword) return;

    sendTransaction();
  };

  return (
    <div className="Welcome">
      <h1>Welcome!</h1>
      <p className="welcome-text">
        <span>Invest</span> in your <span>future </span>with
      </p>
      <img src={logo} className="welcome-logo" alt="logo" />

      <h2 className="welcome-slogan">
        Mint your <strong>fortune</strong> today!
      </h2>
      {!currentAccount && (
        <button className="welcome--btn Wallet" onClick={connectWallet}>
          Connect Your Wallet
        </button>
      )}
      <div className="welcome--container">
        <div className="card-container" id="Wallet">
          <div className="currency-logo">
            <img src={logo} />
          </div>

          <div className="wallet-name">{shorten(currentAccount)}</div>
          <div className="currency-name">ETH</div>
        </div>

        <div className="pay--form">
          <form className="pay--form--inputs">
            <Input
              placeholder="Receiver"
              name="addressTo"
              type="text"
              handleChange={handleChange}
              value={addressTo}
            />
            <Input
              placeholder="Amount"
              name="amount"
              type="number"
              handleChange={handleChange}
              value={amount}
            />
            <Input
              placeholder="Keyword"
              name="keyword"
              type="text"
              handleChange={handleChange}
              value={keyword}
            />
            <Input
              placeholder="Leave a message"
              name="message"
              type="text"
              handleChange={handleChange}
              value={message}
            />
          </form>
          <div className="separator" />
          {isLoading ? (
            <Loader />
          ) : (
            <button onClick={handleSubmit} className="send">
              Send Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
