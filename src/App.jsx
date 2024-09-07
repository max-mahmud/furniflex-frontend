import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LogIn from "./pages/LogIn";
import OrderDetails from "./pages/OrderDetails";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute redirectTo="/LogIn" />}>
          <Route path="orderdetails" element={<OrderDetails />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </Router>
  );
}
