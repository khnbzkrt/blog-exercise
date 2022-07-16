import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Single } from "./pages/single/Single";

const App = () => {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/write"
          element={!user ? <Navigate to="/login" /> : <Write />}
        />
        <Route
          path="/settings"
          element={!user ? <Navigate to="/login" /> : <Settings />}
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
