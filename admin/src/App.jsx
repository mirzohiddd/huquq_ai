import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAdmin } from "./context/AdminContext";
import Layout           from "./components/Layout";
import Login            from "./pages/Login";
import Dashboard        from "./pages/Dashboard";
import Chats            from "./pages/Chats";
import ChatDetail       from "./pages/ChatDetail";
import Users            from "./pages/Users";
import Payments         from "./pages/Payments";
import Settings         from "./pages/Settings";
import SupportMessages  from "./pages/SupportMessages";
import Lessons          from "./pages/Lessons";
import Tests            from "./pages/Tests";
import Laws             from "./pages/Laws";

function Guard({ children }) {
  const { admin, loading } = useAdmin();
  if (loading) return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:"var(--bg)", color:"var(--text2)" }}>
      Yuklanmoqda...
    </div>
  );
  return admin ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Guard><Layout /></Guard>}>
        <Route index                   element={<Dashboard />} />
        <Route path="chats"            element={<Chats />} />
        <Route path="chats/:sessionId" element={<ChatDetail />} />
        <Route path="users"            element={<Users />} />
        <Route path="payments"         element={<Payments />} />
        <Route path="lessons"          element={<Lessons />} />
        <Route path="tests"            element={<Tests />} />
        <Route path="laws"             element={<Laws />} />
        <Route path="support"          element={<SupportMessages />} />
        <Route path="settings"         element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
