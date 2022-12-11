import React, { useEffect, useState } from "react";
import { instanceOf, func } from "prop-types";
import { Button, InputNumber } from "rsuite";
import { WarningRound } from "@rsuite/icons";
import { useRouter } from "next/router";
import CheckoutItem from "./CheckoutItem";

const GroceryCart = ({
  products, onChange, onDelete
}) => {
  const router = useRouter();
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

  const serviceFee = 5.00;
  const total = subTotal + serviceFee;

  return (
    <div className="space-y-10 w-full border-2 rounded bg-gray-100">
      <div className="space-y-2 pt-5">
        {products.map((item) => (
          <div className="flex items-center justify-around grid grid-cols-3 gap-6">
            <CheckoutItem rowData={item}>{item.name}</CheckoutItem>
            <div className="flex justify-center">
              <InputNumber
                min={1}
                value={quantities[item.id] || 1}
                onChange={(val) => onChangeQuantity(val, item.id)}
                className="w-14"
              />
            </div>
            <div className="flex justify-center space-x-2 items-center">
              <div>
                $
                {item.price}
              </div>
              <WarningRound className="text-red-500" onClick={() => handleDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 p-3">
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
              {serviceFee.toFixed(2)}
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
        <Button
          className="bg-green-500"
          color="green"
          appearance="primary"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </Button>
      </div>
    </div>

  );
};

GroceryCart.propTypes = {
  products: instanceOf(Array).isRequired,
  onChange: func.isRequired,
  onDelete: func.isRequired
};
export default GroceryCart;
