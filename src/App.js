import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./templates/Products";
import Navigation from "./mainPages/Navigation";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route path="/products/:productId" element={<ProductsDetail />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
