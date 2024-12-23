import pizzas from "./data/pizza.json";
import Pizza from "./Components/Pizza";

const App = () => {
  return (
    <>
      {pizzas?.map((data, index) => (
        <Pizza key={index} pizza={data} />
      ))}
    </>
  );
};

export default App;
