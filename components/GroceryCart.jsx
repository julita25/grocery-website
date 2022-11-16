import React, { useEffect, useState } from "react";
import { instanceOf, func } from "prop-types";
import { InputNumber } from "rsuite";
import { WarningRound } from "@rsuite/icons";

const GroceryCart = ({ products, onChange, onDelete }) => {
  const [quantities, setQuantities] = useState({ ...products });
  const [subTotal, setSubTotal] = useState(0);

  const onChangeQuantity = (value, id) => {
    const updatedQuantities = { ...quantities };

    updatedQuantities[id] = value;
    setQuantities(updatedQuantities);
    onChange(updatedQuantities);
  };

  console.log(products);

  useEffect(() => {
    const newSubtotal = products.map(
      (item) => item.totalPrice
    ).reduce((prev, current) => prev + current, 0);
    setSubTotal(newSubtotal);
  });

  return (
    <div className="space-y-10">
      <div className="space-y-2 pt-5">
        {products.map((item) => (
          <div className="flex justify-between items-center">
            <InputNumber
              min={0}
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
              <WarningRound className="text-red-500" onClick={() => onDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="font-bold text-xl">Basket Summary</div>
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>
            $
            {subTotal}
          </div>
        </div>

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
