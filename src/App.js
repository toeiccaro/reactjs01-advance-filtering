import "./App.css";
import { Navigation } from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

function App() {
  return (
    <>
      <Navigation>Hello World</Navigation>
      <Products />
      <Recommended />
    </>
  );
}

export default App;
