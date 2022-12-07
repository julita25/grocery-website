import { number, instanceOf } from "prop-types";
import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { Button, Drawer } from "rsuite";

const ShoppingCartButton = ({ drawerBody, itemsCount }) => {
  const [open, setOpen] = useState();
  return (
    <>
      <Button
        color="orange"
        appearance="primary"
        className="bg-yellow-600 flex space-x-2 items-center jusitify-center"
        onClick={() => setOpen(true)}
      >
        <BsBasket />
        <div>Basket</div>
        <div className="rounded border-1 px-2 bg-yellow-500">{itemsCount || 0}</div>
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} className="bg-gray-200">
        <Drawer.Header>
          <Drawer.Title>Your shopping cart</Drawer.Title>
          <Drawer.Actions>
            <Button
              onClick={() => setOpen(false)}
              appearance="primary"
              className="bg-red-500"
              color="red"
            >
              Cancel
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          {drawerBody}
        </Drawer.Body>
      </Drawer>
    </>
  );
};

ShoppingCartButton.propTypes = {
  drawerBody: instanceOf(Object).isRequired,
  itemsCount: number.isRequired
};

export default ShoppingCartButton;
