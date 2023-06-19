import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/Admin/Profile";
import MasterLayout from "./layouts/admin/MasterLayout";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<MasterLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
