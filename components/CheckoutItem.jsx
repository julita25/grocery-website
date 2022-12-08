import React from "react";
import { instanceOf, string } from "prop-types";

const CheckoutItem = ({ rowData, children }) => (
  <div className="flex justify-center items-center">
    <img src={children} alt={rowData.name} />
    <div>{rowData.name}</div>
  </div>
);

CheckoutItem.propTypes = {
  children: string.isRequired,
  rowData: instanceOf(Object).isRequired
};

export default CheckoutItem;
