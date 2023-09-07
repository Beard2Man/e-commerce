import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./mainPages/Navigation";

import Category from "./templates/Category";

import Footer from "./templates/Footer";
import Sale from "./templates/Sale";
import ProductDetails from "./templates/ProductsDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navigation />
          {/* <Sale /> */}

          <Routes>
            {/* <Route path="/:category/id" element={<ProductDetails />} /> */}

            <Route path="/:category" element={<Category />} />
            <Route
              path="/:product/:category/:id"
              element={<ProductDetails />}
            />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
