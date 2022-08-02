import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/marginpadding.css';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
