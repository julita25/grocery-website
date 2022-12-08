import React from "react";
import { useSelector } from "react-redux";
import { FlexboxGrid, List, Panel } from "rsuite";
import CheckoutItem from "../components/CheckoutItem";
import PriceFormatter from "../components/PriceFormatter";
import { getCartItemsSelector } from "../store/selectors";

export const headers = [{
  key: "name",
  label: "Items",
  Component: (props) => <CheckoutItem {...props} />
},
{
  key: "quantity",
  label: "Quantity"
}, {
  key: "price",
  label: "Price",
  Component: PriceFormatter
},
{
  key: "totalPrice",
  label: "Total",
  Component: PriceFormatter
}
];

const checkout = () => {
  const cartItems = useSelector(getCartItemsSelector);

  const subTotal = cartItems.map(
    (item) => item.totalPrice
  ).reduce((prev, current) => prev + current, 0).toFixed(2);

  const serviceFee = 5;
  const total = (parseFloat(subTotal) + serviceFee).toFixed(2);

  console.log(typeof subTotal);
  return (
    <div className="p-10 h-full flex flex-col justify-center items-center space-y-20">
      <h1 className="text-3xl">Order Summary</h1>
      <Panel className="w-3/4 bg-gray-100">
        <Panel header="Online Store" className="bg-white mb-8">
          <List className="bg-gray-100">
            <List.Item key="headers">
              <FlexboxGrid justify="space-between">
                {
                  headers?.map((item) => (
                    <FlexboxGrid.Item colspan={4} className="font-bold" align="middle">
                      {item.label}
                    </FlexboxGrid.Item>
                  ))
                }
              </FlexboxGrid>
            </List.Item>
            {cartItems.map((item, index) => (
              <List.Item key={item.title} index={index + 1}>
                <FlexboxGrid justify="space-between" align="middle">
                  {
                    headers?.map(({
                      key, Component
                    }) => (
                      Component
                        ? (
                          <FlexboxGrid.Item colspan={4} align="middle">
                            <Component rowData={item}>{item[key]}</Component>
                          </FlexboxGrid.Item>
                        )
                        : (
                          <FlexboxGrid.Item colspan={4} align="middle">
                            {item[key]}
                          </FlexboxGrid.Item>
                        )
                    ))
                  }
                </FlexboxGrid>
              </List.Item>
            ))}
          </List>
        </Panel>
        <Panel header="Payment Summary" className="bg-white">
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
        </Panel>
      </Panel>
    </div>
  );
};

export default checkout;
