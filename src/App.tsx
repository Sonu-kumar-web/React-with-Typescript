import React from "react";
import AppCSS from "./styles/app.module.css";
import pizzas from "./data/pizza.json";
import Pizza from "./Components/Pizza";
import PizzaSVG from "./assets/svg/pizza.svg";

const App: React.FC = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        {/* Import Image */}
        <img src={PizzaSVG} alt="My SVG Icon" width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
      </div>
      <ul>
        {pizzas?.map((data, index) => (
          <Pizza key={index} pizza={data} />
        ))}
      </ul>
    </div>
  );
};

export default App;
