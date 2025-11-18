import React, { useState } from "react";
import Header from "../common/Header";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <DashboardContent mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} />
    </>
  );
};

export default Dashboard;
