import { react, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SalesRepresentative from "./components/SalesRepresentative";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import SalesDashboard from "./components/SalesDashboard";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/salesrepresentative"
            element={<SalesRepresentative />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/landing" element={<Landing />} />

          <Route path="/Chatup" element={<Chat />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SalesDashboard" element={<SalesDashboard />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
