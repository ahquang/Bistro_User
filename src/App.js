import { RouterProvider } from "react-router-dom";
import { router } from "../src/utils/router";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </div>
  );
}

export default App;
