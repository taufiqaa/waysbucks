import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import { AddProduct } from "./pages/product";
import { AddToping } from "./pages/toping";
import { Income } from "./pages/transaction";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import DetailProduct from "./pages/detail-product";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/add-toping' element={<AddToping />} />
      <Route path='/income' element={<Income />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/detail-product' element={<DetailProduct />}/>
    </Routes>
  )
}
