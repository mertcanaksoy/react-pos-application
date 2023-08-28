import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
