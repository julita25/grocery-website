import React from "react";
import { instanceOf, string } from "prop-types";

const CheckoutItem = ({ rowData, children }) => (
  <div className="flex justify-center items-center">
    <img src={rowData.img} alt={children} className="h-14 w-14 mr-2" />
    <div>{children}</div>
  </div>
);

CheckoutItem.propTypes = {
  children: string.isRequired,
  rowData: instanceOf(Object).isRequired
};

export default CheckoutItem;
