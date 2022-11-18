import React, { useState } from "react";
import { Loader, Panel } from "rsuite";
import GroceryCart from "../components/GroceryCart";
import GroceryItem from "../components/GroceryItem";
import groceries from "../data/groceries";

const GroceryPage = () => {
  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addGroceryItem = (item) => {
    const itemExists = itemsList.some((it) => it.id === item.id);
    let updatedGroceryItems = [];
    if (itemExists) {
      updatedGroceryItems = itemsList.map((it) => {
        if (it.id === item.id) {
          const newQty = it.quantity + 1;
          const obj = {
            ...it,
            quantity: newQty,
            totalPrice: newQty * parseFloat(it.price)
          };
          return obj;
        }
        return it;
      });
    } else {
      updatedGroceryItems = [
        ...itemsList,
        item
      ];
    }
    setItemsList(updatedGroceryItems);
  };

  const updateQuantities = (qtys) => {
    const items = itemsList.map((item) => {
      if (item.id in qtys) {
        const quantities = parseFloat(qtys[item.id]);
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

  const handleDeleteItems = (del) => {
    if (del === "All") {
      setItemsList([]);
    } else {
      const updatedList = itemsList.filter((item) => item.id !== del);
      setItemsList(updatedList);
    }
  };

  const onConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) return <Loader center size="lg" />;

  const getGroceryList = (it) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {groceries[it].map((item) => (
        <GroceryItem item={item} onChange={addGroceryItem} />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="w-full">
        <img
          className=" w-full opacity-60 h-[28rem] object-cover"
          src="https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list.jpg"
          alt="food-bg"
        />
        <div
          className="bg-white outline outline-2 text-5xl absolute top-1/4 left-2/4 text-black -translate-x-1/2 -translate-y-1/2"
        >
          Local grocery store
        </div>
        <div
          className="bg-white outline outline-2 text-3xl text-black absolute top-1/3 left-2/4 -translate-x-1/2 -translate-y-1/2"
        >
          Your fastest online grocery store
        </div>
      </div>
      <div className="flex w-full p-10 justify-between bg-orange-400">
        <div className="space-y-5 w-2/3">
          {
            Object.keys(groceries).map((category) => (
              <>
                <div className="text-2xl font-bold text-white">{category.toUpperCase()}</div>
                {getGroceryList(category)}
              </>
            ))

          }
        </div>
        <div className="flex w-[35rem]">
          <div className="sticky top-10 space-y-5 w-full px-10">
            <div className="text-2xl font-bold text-white">All ready? checkout</div>
            <Panel bordered className="overflow-auto h-[25rem] bg-white">
              <div className="font-bold text-xl">Your shopping cart</div>
              {itemsList.length ? (
                <GroceryCart
                  products={itemsList}
                  onChange={updateQuantities}
                  onDelete={handleDeleteItems}
                  onConfirm={onConfirm}
                />
              )
                : (
                  <div className="flex items-center">Your shopping items will appear here</div>
                )}

            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryPage;
