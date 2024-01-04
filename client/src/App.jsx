import { react, useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SalesRepresentative from "./components/SalesRepresentative";

import Blog from "./components/Blog";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AptitudeTest from "./components/AptitudeTest";
import PersonalityTest from "./components/PersonalityTest";

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
          <Route path="/Explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Chatup" element={<Chat />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          {/* <Route path="/Explore/aptitudeTest" element={<AptitudeTest />} />
          <Route
            path="/Explore/personalityTest"
            element={<PersonalityTest />}
          /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
