import React, { useEffect, useState } from "react";
import { instanceOf, func } from "prop-types";
import { InputNumber } from "rsuite";
import { WarningRound } from "@rsuite/icons";
import ModalButton from "./ModalButton";

const GroceryCart = ({
  products, onChange, onDelete, onConfirm
}) => {
  const [quantities, setQuantities] = useState({ ...products });
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = products.map(
      (item) => item.totalPrice
    ).reduce((prev, current) => prev + current, 0).toFixed(2);
    setSubTotal(parseFloat(newSubtotal));
  }, [products]);

  useEffect(() => {
    if (products.length) {
      const updatedQuantities = { ...quantities };
      products.forEach((item) => {
        updatedQuantities[item.id] = item.quantity;
      });
      setQuantities(updatedQuantities);
    }
  }, [products]);

  const onChangeQuantity = (value, id) => {
    const updatedQuantities = { ...quantities };

    updatedQuantities[id] = value;
    setQuantities(updatedQuantities);
    onChange(updatedQuantities);
  };

  const handleDelete = (id) => {
    delete quantities[id];
    onDelete(id);
  };

  const handleConfirmOrder = () => {
    setQuantities({});
    onDelete("All");
    onConfirm();
  };

  const serviceFee = 2;
  const total = subTotal + serviceFee;

  return (
    <div className="space-y-10">
      <div className="space-y-2 pt-5">
        {products.map((item) => (
          <div className="flex justify-between items-center">
            <InputNumber
              min={1}
              value={quantities[item.id] || 1}
              onChange={(val) => onChangeQuantity(val, item.id)}
              className="w-14"
            />
            <div>{item.name}</div>
            <div className="flex space-x-2 items-center">
              <div>
                $
                {item.price}
              </div>
              <WarningRound className="text-red-500" onClick={() => handleDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="font-bold text-xl">Basket Summary</div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>
              $
              {subTotal}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Service fee</div>
            <div>
              $
              {serviceFee}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div>
              $
              {total}
            </div>
          </div>
        </div>
        <ModalButton
          onSubmit={handleConfirmOrder}
          body={`Your order of $${total} is complete. Click on confirm to send your order request or cancel if you want to add more items`}
        />
      </div>
    </div>

  );
};

GroceryCart.propTypes = {
  products: instanceOf(Array).isRequired,
  onChange: func.isRequired,
  onDelete: func.isRequired,
  onConfirm: func.isRequired
};
export default GroceryCart;
