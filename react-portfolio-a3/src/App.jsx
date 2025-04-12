import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddSkill from "./components/AddSkill";
import AddProject from "./components/AddProject";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";


function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/skills" element={<AddSkill />} />
        <Route path="/admin/projects" element={<AddProject />} />
      </Routes>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
