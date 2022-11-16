import React, { useState } from "react";
import { Panel } from "rsuite";
import GroceryCart from "../components/GroceryCart";
import GroceryItem from "../components/GroceryItem";
import groceries from "../data/groceries";

const GroceryPage = () => {
  const [itemsList, setItemsList] = useState([]);

  const addGroceryItem = (item) => {
    const updatedGroceryItems = [
      ...itemsList,
      item
    ];
    setItemsList(updatedGroceryItems);
  };

  const updateQuantities = (qtys) => {
    const items = itemsList.map((item) => {
      if (item.id in qtys) {
        const quantities = parseFloat(qtys[item.id]);
        console.log(quantities);
        const updatedItem = {
          ...item,
          quantity: quantities,
          totalPrice: parseFloat(item.price) * quantities
        };
        return updatedItem;
      }
      return item;
    });
    setItemsList(items);
  };

  const onDeleteItem = (id) => {
    const updatedList = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedList);
  };

  const getGroceryList = (it) => (
    <div className="grid grid-cols-3 gap-5">
      {groceries[it].map((item) => (
        <GroceryItem item={item} onChange={addGroceryItem} />
      ))}
    </div>
  );

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex p-10">
        <div className="space-y-5 w-2/3">
          {
            Object.keys(groceries).map((category) => (
              <>
                <div className="text-3xl font-bold">{category.toUpperCase()}</div>
                {getGroceryList(category)}
              </>
            ))

          }
        </div>
        <div className="w-1/3 px-10 space-y-5">
          <div className="text-3xl font-bold">All ready? chekout</div>
          <Panel bordered className="overflow-auto h-[25rem]">
            <div className="font-bold text-2xl">Your shopping cart</div>
            <GroceryCart products={itemsList} onChange={updateQuantities} onDelete={onDeleteItem} />
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default GroceryPage;
