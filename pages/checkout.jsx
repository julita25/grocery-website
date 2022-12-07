import React from "react";
import { FlexboxGrid, List, Panel } from "rsuite";

const checkout = () => {
  const headers = ["Items", "Quantity", "Price", "Toatk"];
  return (
    <div className="bg-gray-300 p-10 h-full">
      <h1>Order Summary</h1>
      <Panel header="Online store">
        <List>
          <List.Item key="headers">
            <FlexboxGrid justify="space-between">
              {
                headers?.map((label) => (
                  <FlexboxGrid.Item colspan={4} className="font-bold" align="middle">
                    {label}
                  </FlexboxGrid.Item>
                ))
              }
            </FlexboxGrid>
          </List.Item>
          {data.map((item, index) => (
            <List.Item key={item.title} index={index + 1}>
              <FlexboxGrid justify="space-between">
                {
                  headers?.map(({
                    Component, colspan, key
                  }) => (
                    Component
                      ? (
                        <FlexboxGrid.Item colspan={colspan || 4} align="middle">
                          <Component rowData={item}>{item[key]}</Component>
                        </FlexboxGrid.Item>
                      )
                      : (
                        <FlexboxGrid.Item colspan={colspan || 4} align="middle">
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
