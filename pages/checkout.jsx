import React from "react";
import { useSelector } from "react-redux";
import { FlexboxGrid, List, Panel } from "rsuite";
import CheckoutItem from "../components/CheckoutItem";
import PriceFormatter from "../components/PriceFormatter";
import { getCartItemsSelector } from "../store/selectors";

export const headers = [{
  key: "name",
  label: "Items",
  Component: CheckoutItem
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
  key: "total",
  label: "Total",
  Component: (props) => <PriceFormatter isTotal {...props} />
}
];

const checkout = () => {
  const cartItems = useSelector(getCartItemsSelector);
  console.log(cartItems);
  return (
    <div className="bg-gray-300 p-10 h-full">
      <h1>Order Summary</h1>
      <Panel header="Online store">
        <List>
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
    </div>
  );
};

export default checkout;
