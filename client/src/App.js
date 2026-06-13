import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmers";
import Farms from "./pages/Farms";
import Monitoring from "./pages/Monitoring";
import Evaluations from "./pages/Evaluations";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";

import Layout from "./components/Layout";

import "./styles/theme.css";

function App() {

  return (

    <Router>

      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Auth />} />

        {/* PRIVATE APPLICATION */}
        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/farmers" element={<Farmers />} />

          <Route path="/farms" element={<Farms />} />

          <Route path="/monitoring" element={<Monitoring />} />

          <Route path="/evaluations" element={<Evaluations />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/notifications"  element={<Notifications />} />

        </Route>

      </Routes>

    </Router>

  );

}

export default App;