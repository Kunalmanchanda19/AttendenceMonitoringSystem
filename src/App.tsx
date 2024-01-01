import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ResponsiveDrawer from "./components/Drawer/Drawer";
import HeaderBar from "./components/Header/HeaderBar";
import AppRoutes from "./routes/AppRoutes";
// import { Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        {/* <Routes> */}
        <AppRoutes />
        {/* </Routes> */}
      </Router>
      {/* <HeaderBar 
      
      name="Attendance System"
      /> */}
      {/* <ResponsiveDrawer/> */}
    </div>
  );
}

export default App;
