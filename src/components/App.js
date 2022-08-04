import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import { AddProduct } from "./pages/product";
import { AddToping } from "./pages/toping";
import { Income } from "./pages/transaction";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/add-toping' element={<AddToping />} />
      <Route path='/income' element={<Income />} />
    </Routes>
  )
}
