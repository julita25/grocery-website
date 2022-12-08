import { number } from "prop-types";
import React from "react";

const PriceFormatter = ({ children }) => (
  <div>
    $
    {children}
  </div>
);

PriceFormatter.propTypes = {
  children: number.isRequired
};

export default PriceFormatter;
