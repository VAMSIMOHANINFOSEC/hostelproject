
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/AdminDash/admindash";
import StudentDashboard from "./pages/StudentDash/stddashboard";
import StudentLogin from "./pages/Auth/studentlog";
import AdminLogin from "./pages/Auth/adminlogin";
import ComplaintsList from "./Components/student/ComplaintList";
import Changepassword from "./Components/student/Changepassword";
import ComplaintsListAdmin from "./pages/AdminDash/admincomplaints";
import ComplaintForm from './Components/student/Complaintform';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/student/auth/login" element={<StudentLogin />} />
      <Route path="/admin/auth/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      <Route path="/admin/dashboard/complaintslist" element={<ComplaintsListAdmin />} />
      <Route path="/admin/dashboard/changepassword-admin" element={<ComplaintsListAdmin />} />
      <Route path="/student/dashboard/*" element={<StudentDashboard />} />
      <Route path="/student/dashboard/complaintform" element={<ComplaintForm />} />
      <Route path="/student/dashboard/complaintlist" element={<ComplaintsList />} />
      <Route path="/student/dashboard/changepassword" element={<Changepassword/>} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default AppRouter;
