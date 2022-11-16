import React from "react";
import { func, instanceOf } from "prop-types";
import { Panel } from "rsuite";
import { PlusRound } from "@rsuite/icons";

const GroceryItem = ({ item, onChange }) => {
  // const [itemsList, setItemsList] = useState();
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
      <div className="flex space-x-8">
        <div className="flex w-3/4 space-x-2">
          <div>
            <img src={img} alt="food" className="w-24 h-16 object-cover" />
          </div>
          <div>
            {name}
            <div className="flex">
              <div className="mr-2">Country: </div>
              {producer}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-end">
            $
            {price}
          </div>
          <PlusRound
            onClick={() => handleAddGroceryItem(item)}
            color="green"
            className="w-10 h-5"
          />
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
