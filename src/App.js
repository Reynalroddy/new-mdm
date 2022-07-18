// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home from "./components/Home";


import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import Single from "./pages/Single";
import './App.scss';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard/>} />
          <Route path='view-device' element={<Device/>} />
          <Route path='single-device/:id' element={<Single/>} />
          {/* <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} /> */}
        </Route>
       
        
      </Routes>
    </Router>
  );
};

export default App;
