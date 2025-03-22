import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Number of Items: {cartItemsCount}</div>;
};

export default NavBar;
