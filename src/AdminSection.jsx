import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminSection/AdminDashboard";
import AdminBranch from "./AdminSection/AdminBranch";
import AdminRoute from "./AdminSection/AdminRoute";

function AdminSection() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="/admin/adminbranch" element={<AdminBranch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AdminSection;
