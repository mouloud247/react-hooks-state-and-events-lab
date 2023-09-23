import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false);

  return (
    <li className={item ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setItem(!item)}>{item ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
