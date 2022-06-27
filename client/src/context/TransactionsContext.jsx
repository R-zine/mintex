import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionsContext = React.createContext();

const { ethereum } = window;

const getEtheriumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // save the state below to a server instead
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask to continue.");
      const transactionContract = getEtheriumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map((t) => ({
        addressTo: t.receiver,
        addressFrom: t.sender,
        timestamp: new Date(t.timestamp.toNumber() * 1000).toLocaleString(),
        message: t.message,
        keyword: t.keyword,
        amount: parseInt(t.amount._hex) / 10 ** 18,
      }));

      setTransactions(structuredTransactions);
    } catch (error) {}
  };

  const checkWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask to continue.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      throw new Error("No Ethereum object.");
    }
  };

  const checkTransactionsExist = async () => {
    try {
      const transactionContract = getEtheriumContract();
    } catch (error) {
      throw new Error("No Ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask to continue.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask to continue.");

      const { addressTo, message, amount, keyword } = formData;
      const transactionContract = getEtheriumContract();
      const parsedGwei = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedGwei._hex,
          },
        ],
      });

      const hash = await transactionContract.addToBlockchain(
        addressTo,
        parsedGwei,
        message,
        keyword
      );

      setIsLoading(true);

      await hash.wait();
      setIsLoading(false);

      const count = await transactionContract.getTransactionCount();
      setTransactionCount(count.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWalletConnected();
    checkTransactionsExist();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
