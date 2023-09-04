import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./templates/Products";
import Navigation from "./mainPages/Navigation";

import Pants from "./templates/Pants";
import Helmets from "./templates/Helmets";
import Jackets from "./templates/Jackets";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/helmets" element={<Helmets />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/jackets" element={<Jackets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
