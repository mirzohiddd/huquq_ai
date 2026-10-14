import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import axios from "axios";
import s from "./Layout.module.css";
import { API_BASE } from "../utils/apiBase";
import BrandMark from "./BrandMark";
import {
  LayoutDashboard, MessagesSquare, Users, CreditCard, ShoppingBag, BookOpen,
  ClipboardCheck, Scale, LifeBuoy, Settings, ChevronLeft, ChevronRight,
  LogOut, UserRound, MessageSquareQuote,
} from "lucide-react";

const NAV = [
  { to: "/",         icon: LayoutDashboard, label: "Dashboard"        },
  { to: "/chats",    icon: MessagesSquare,  label: "Suhbatlar"        },
  { to: "/users",    icon: Users,           label: "Foydalanuvchilar" },
  { to: "/payments", icon: CreditCard,      label: "To'lovlar"        },
  { to: "/orders",   icon: ShoppingBag,     label: "Buyurtmalar"      },
  { to: "/reviews",  icon: MessageSquareQuote, label: "Sharhlar"       },
  { to: "/lessons",  icon: BookOpen,        label: "Darslar"          },
  { to: "/tests",    icon: ClipboardCheck,  label: "Testlar"          },
  { to: "/laws",     icon: Scale,           label: "Qonunlar"         },
  { to: "/support",  icon: LifeBuoy,        label: "Texnik yordam"    },
  { to: "/settings", icon: Settings,        label: "Sozlamalar"       },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={s.topTime}>
      {time.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </span>
  );
}

export default function Layout() {
  const { admin, logout } = useAdmin();
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);

  const api = axios.create({ 
    baseURL: API_BASE,
    timeout: 20000,
  });
  api.interceptors.request.use((cfg) => {
    const token = localStorage.getItem("adminToken");
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
  });

  useEffect(() => {
    loadPendingCount();
    const interval = setInterval(loadPendingCount, 30000); // Har 30 sekundda yangilash
    return () => clearInterval(interval);
  }, []);

  async function loadPendingCount() {
    try {
      const { data } = await api.get("/support");
      const messages = Array.isArray(data) ? data : [];
      const unread = messages.filter(m => m.status === "pending" && !m.read).length;
      setPendingCount(unread);
    } catch (err) {
      console.error("Pending count error:", err);
      setPendingCount(0);
    }
  }

  function handleLogout() { logout(); nav("/login"); }

  return (
    <div className={`${s.shell} ${collapsed ? s.collapsed : ""}`}>
      {/* ── Sidebar ── */}
      <aside className={s.sidebar}>
        <div className={s.brand}>
          <div className={s.brandGlow} />
          <span className={s.brandIcon}><BrandMark /></span>
          {!collapsed && (
            <div>
              <span className={s.brandText}>Admin Panel</span>
              <span className={s.brandSub}>HuquqTech</span>
            </div>
          )}
        </div>

        <nav className={s.nav}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <span className={s.linkIcon}><item.icon size={18} strokeWidth={2} /></span>
              {!collapsed && <span className={s.linkLabel}>{item.label}</span>}
              {item.to === "/support" && pendingCount > 0 && (
                <span className={s.badge}>{pendingCount}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={s.sideBottom}>
          <button className={s.collapseBtn} onClick={() => setCollapsed((p) => !p)} title="Kichraytirish">
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          <div className={s.userRow}>
            <div className={s.userAvatar}>{admin?.username?.[0]?.toUpperCase()}</div>
            {!collapsed && (
              <div className={s.userInfo}>
                <span className={s.userName}>{admin?.username}</span>
                <span className={s.userRole}>Administrator</span>
                <button className={s.logoutBtn} onClick={handleLogout}>Chiqish <LogOut size={12} /></button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className={s.main}>
        <header className={s.topbar}>
          <div className={s.topLeft}>
            <span className={s.topTitle}>HuquqTech</span>
            <span className={s.topBadge}>LIVE</span>
          </div>
          <div className={s.topRight}>
            <Clock />
            <span className={s.topAdmin}><UserRound size={15} /> {admin?.username}</span>
            <button className={s.topLogout} onClick={handleLogout}><LogOut size={13} /> Chiqish</button>
          </div>
        </header>
        <main className={s.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
