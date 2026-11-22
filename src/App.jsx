import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Login/Login";
import Jobs from "./Components/Jobs/Jobs";
import NotFound from "./NotFound/NotFound";
import ProtectedRoute from "./Common/ProtectedRoute/ProtectedRoute";
import Header from "./Common/Header/Header";

// hide header on login page
const ConditionalHeader = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }
  return <Header />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-900 min-h-screen text-white">
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/jobs" element={<ProtectedRoute Component={Jobs} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
