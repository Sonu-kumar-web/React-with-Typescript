import React from "react";

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
    <li style={{ display: "flex", marginLeft: "2rem" }}>
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </div>
    </li>
  );
};

export default Pizza;
