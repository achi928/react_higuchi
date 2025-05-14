import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CustomerList from "./pages/CustomerList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
