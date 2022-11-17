import { func } from "prop-types";
import React, { useState } from "react";
import { Button, Modal } from "rsuite";

const ModalButton = ({ onSubmit }) => {
  const [open, setOpen] = useState();

  const handleConfirm = () => {
    setOpen(false);
    onSubmit();
  };

  return (
    <>
      <Button
        className="bg-yellow-400"
        appearance="primary"
        color="orange"
        onClick={() => setOpen(true)}
      >
        Checkout
      </Button>
      <Modal open={open}>
        <Modal.Header>
          <Modal.Title>Order complete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order is ready! Click confirm to send your order request
          or cancel if you want to add more items
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-green-500"
            appearance="primary"
            color="green"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
          <Button
            className="bg-red-500"
            appearance="primary"
            color="red"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalButton.propTypes = {
  onSubmit: func.isRequired
};

export default ModalButton;
