import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LangProvider } from "./context/LangContext";
import { ChatPanelProvider } from "./context/ChatPanelContext";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";

/* TEZLIK: avval hamma sahifa bitta bundle'ga qo'shilardi (677 KB) va
   foydalanuvchi Bosh sahifani ochishi bilan admin paneli, ovozli chat,
   darslar — hammasi yuklanardi. Endi ular ALOHIDA bo'laklarga ajratildi
   va faqat kerak bo'lganda yuklanadi. Bosh sahifa va SiteLayout esa
   birinchi ko'rinish uchun darhol kerak — ular ataylab lazy QILINMADI. */
const AuthPages = lazy(() => import("./pages/AuthPages"));
const VoiceChat = lazy(() => import("./pages/VoiceChat"));
const Library = lazy(() => import("./pages/Library"));
const Constitution = lazy(() => import("./pages/Constitution"));
const Lessons = lazy(() => import("./pages/Lessons"));
const Tests = lazy(() => import("./pages/Tests"));
const Legal = lazy(() => import("./pages/Legal"));

const Login = lazy(() =>
  import("./pages/AuthPages").then((m) => ({ default: m.Login })),
);

const Register = lazy(() =>
  import("./pages/AuthPages").then((m) => ({ default: m.Register })),
);
const Terms = lazy(() =>
  import("./pages/Legal").then((m) => ({ default: m.Terms })),
);
const Privacy = lazy(() =>
  import("./pages/Legal").then((m) => ({ default: m.Privacy })),
);
const AIDisclaimer = lazy(() =>
  import("./pages/Legal").then((m) => ({ default: m.AIDisclaimer })),
);
import { initSmoothAnchors, initSmoothWheel } from "./utils/smoothScroll";


function RequireGuest({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/" replace /> : children;
}

/**
 * Darslar, Testlar va Qonunlar kutubxonasi — faqat ro'yxatdan o'tgan
 * foydalanuvchilar uchun. Login qilmagan bo'lsa ro'yxatdan o'tish
 * sahifasiga yo'naltiriladi.
 */
function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? children : <Navigate to="/register" replace />;
}

function AppRoutes() {
  return (
    // Sahifa bo'lagi yuklanayotgan paytda bo'sh ekran — spinner emas,
    // chunki yuklanish odatda 100ms dan kam (mahalliy keshdan).
    <Suspense fallback={null}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        {/* Eski sahifa manzillari endi Home'dagi tegishli bo'limga yo'naltiriladi */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route
          path="/services"
          element={<Navigate to="/#services" replace />}
        />
        <Route
          path="/articles"
          element={<Navigate to="/#articles" replace />}
        />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        {/* /profile redirects to home — profile is now a modal */}
        <Route path="/profile" element={<Navigate to="/" replace />} />

        {/* Huquqiy hujjatlar — hammaga ochiq (footer va login/register'da havola) */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<AIDisclaimer />} />

        {/* Ro'yxatdan o'tganlar uchun bo'limlar */}
        <Route
          path="/lessons"
          element={
            <RequireAuth>
              <Lessons />
            </RequireAuth>
          }
        />
        <Route
          path="/tests"
          element={
            <RequireAuth>
              <Tests />
            </RequireAuth>
          }
        />
        <Route
          path="/library"
          element={
            <RequireAuth>
              <Library />
            </RequireAuth>
          }
        />
        <Route
          path="/constitution"
          element={
            <RequireAuth>
              <Constitution />
            </RequireAuth>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <RequireGuest>
            <Login />
          </RequireGuest>
        }
      />
      <Route
        path="/register"
        element={
          <RequireGuest>
            <Register />
          </RequireGuest>
        }
      />
      <Route path="/voice" element={<VoiceChat />} />
      {/* Eslatma: asosiy saytdagi eski admin panel olib tashlandi —
          haqiqiy admin paneli alohida `admin/` ilovasi. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Suspense>
  );
}

export default function App() {
  // Sayt bo'ylab barcha "#" havolalari yumshoq, sekin scroll bilan
  // ishlaydi (utils/smoothScroll.js). Delegatsiya orqali — keyinroq
  // qo'shilgan havolalar ham avtomatik qamrab olinadi.
  useEffect(() => initSmoothAnchors(), []);

  // Sichqoncha g'ildiragi bilan scroll ham inersiyali (og'ir, sekin)
  // bo'ladi. Sensorli qurilmalar, ichki scrollli bloklar va modal
  // ochiq holat avtomatik chetlab o'tiladi — utils/smoothScroll.js.
  useEffect(() => initSmoothWheel(), []);

  return (
    <LangProvider>
      <ChatPanelProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ChatPanelProvider>
    </LangProvider>
  );
}
