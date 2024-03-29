import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadDocs from "./pages/UploadDocs";
import UserDash from "./pages/UserDash.jsx";
import AllJobs from "./pages/AllJobs.jsx";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/upload_docs" element={<UploadDocs />} />
          <Route exact path="/user_dashboard" element={<UserDash />} />
          <Route exact path="/all_jobs" element={<AllJobs />} />
        </Routes>
      </Router>
    </>
  );
}
