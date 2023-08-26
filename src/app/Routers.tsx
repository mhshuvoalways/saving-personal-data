import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo";
import PersonalProject from "../pages/PersonalProject";
import WhenWhere from "../pages/WhenWhere";

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/personalproject" element={<PersonalProject />} />
        <Route path="/whenwhere" element={<WhenWhere />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
