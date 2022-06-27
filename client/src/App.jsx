import { Contract } from "ethers";
import { useState } from "react";
import {
  Navbar,
  Welcome,
  Transactions,
  Footer,
  Contact,
  Arrow,
} from "./components";
import { text } from "./utils/privacyText.js";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Navbar modalOpen={setIsOpen} />
      <Modal show={isOpen} size="lg" keyboard={true} onHide={hideModal}>
        <Modal.Header>
          <button onClick={hideModal}>X</button>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>X</button>
        </Modal.Footer>
      </Modal>
      <Welcome />
      <Transactions />
      <Contact />
      <Arrow />
      <Footer />
    </div>
  );
};

export default App;
