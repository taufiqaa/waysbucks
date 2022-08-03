import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/marginpadding.css';
import './App.css';
import AddProduct from "./pages/product";
import AddToping from "./pages/toping";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/add-toping' element={<AddToping />} />
    </Routes>
  )
}
