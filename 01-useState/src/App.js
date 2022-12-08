import { ConditionalApp } from "./components/ConditionalApp";
import { CounterApp } from "./components/CounterApp";
import { ErrorApp } from "./components/ErrorApp";
import { ProductApp } from "./components/ProductApp";
import { ShoppingCart } from "./components/ShoppingCart";



function App() {

  return (
    <>
      <h1>useState Examples</h1>
      <CounterApp/>
      <ConditionalApp/>
      <ErrorApp/>
      <ProductApp/>
      <ShoppingCart/>
    </>
  );
} 

export default App;
