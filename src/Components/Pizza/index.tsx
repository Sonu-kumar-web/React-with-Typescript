import React from "react";
import PizzaCSS from "./pizza.module.css";

// Describe props
interface Pizza {
  id: number; // Required
  name: string;
  description: string; // Required
  price: number;
  feedback?: string; // Optional
}

interface Props {
  pizza: Pizza;
}

// Function component declaration
const Pizza: React.FC<Props> = ({ pizza }) => {
  return (
    <li className={PizzaCSS.container}>
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </div>
    </li>
  );
};

export default Pizza;
