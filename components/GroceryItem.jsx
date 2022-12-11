import React from "react";
import { func, instanceOf } from "prop-types";
import { Panel } from "rsuite";
import { PlusRound } from "@rsuite/icons";

const GroceryItem = ({ item, onChange }) => {
  const {
    name, producer, price, img
  } = item;

  const handleAddGroceryItem = (it) => {
    const itemWithQuantity = {
      ...it,
      quantity: 1,
      totalPrice: parseFloat(it.price)
    };
    onChange(itemWithQuantity);
  };

  return (
    <Panel bordered className="bg-white w-full h-[8rem]">
      <div className="flex grid grid-cols-3 gap-5 items-center">
        <div className="flex w-3/4 space-x-2 col-span-2">
          <div>
            <img src={img} alt="food" className="w-20 h-16 object-contain" />
          </div>
          <div className="flex flex-col">
            <div>
              {name}
            </div>
            <div>
              Country:
              {producer}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 justify-end">
          <div className="flex justify-end">
            $
            {price}
          </div>
          <div className="flex justify-end">
            <PlusRound
              onClick={() => handleAddGroceryItem(item)}
              color="green"
              className="w-5 h-5 hover:text-green-500"
            />
          </div>
        </div>
      </div>
    </Panel>
  );
};

GroceryItem.propTypes = {
  item: instanceOf(Object).isRequired,
  onChange: func.isRequired
};

export default GroceryItem;
