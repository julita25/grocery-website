import { bool, instanceOf, number } from "prop-types";
import React from "react";

const PriceFormatter = ({ rowData, children, isTotal }) => {
  const price = isTotal ? children * rowData.quantity : children;
  return (
    <div>
      $
      {price}
    </div>
  );
};

PriceFormatter.propTypes = {
  rowData: instanceOf(Object).isRequired,
  children: number.isRequired,
  isTotal: bool
};

PriceFormatter.defaultProps = {
  isTotal: false
};

export default PriceFormatter;
