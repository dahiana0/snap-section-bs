import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import { Home } from "./Pages/Home";
import { Cakes } from "./Pages/Cakes";
import { Cupcakes } from "./Pages/Cupcakes";
import { Desserts } from "./Pages/Desserts";

 export function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cupcakes" element={<Cupcakes />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;