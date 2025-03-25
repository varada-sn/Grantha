import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom"; 
import { Navbar } from "../component/Navbar/Navbar"; 
import { LoginForm } from "../component/LoginSignup/LoginForm"; 
import { Home } from "../component/Home/Home";
import { SignupForm } from "../component/LoginSignup/SignupForm";
import { Search } from "../component/Search/Search";
import { Dashboard } from "../component/SupplierDashboard/Dashboard";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute for authentication check

const Layout = () => {
  const location = useLocation();

  // Define routes where Navbar should NOT be displayed
  const hideNavbarRoutes = ["/home/login", "/home/signup"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/login" element={<LoginForm />} />
        <Route path="/home/signup" element={<SignupForm />} />
        <Route path="/home/search" element={<Search />} />
        
        {/* Protected Route - Supplier Dashboard (Only for authenticated users) */}
        <Route element={<PrivateRoute />}>
          <Route path="/home/supplierDashboard" element={<Dashboard />} />
        </Route>

        {/* Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export const CustomerRouter = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};