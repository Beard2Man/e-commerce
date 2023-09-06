import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./templates/Products";
import Navigation from "./mainPages/Navigation";

import Category from "./templates/Category";

import Pants from "./templates/Pants";
import Footer from "./templates/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:category" element={<Category />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
