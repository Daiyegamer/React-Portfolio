import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AddSkill from "../components/AddSkill";
import AddProject from "../components/AddProject";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const { auth } = useAuth();
  const [skillRefreshKey, setSkillRefreshKey] = useState(0);
  const [projectRefreshKey, setProjectRefreshKey] = useState(0);

  const handleSkillAdded = () => setSkillRefreshKey((prev) => prev + 1);
  const handleProjectAdded = () => setProjectRefreshKey((prev) => prev + 1);

  return (
    <main className="skills-projects-container">
      <section className="skills-section card">
        {auth.loggedIn && auth.isAdmin && (
          <div className="manage-link">
            <Link to="/admin/skills">Manage Skills</Link>
          </div>
        )}
        <h2>Skills</h2>
        <Skills key={skillRefreshKey} />
        {auth.loggedIn && auth.isAdmin && (
          <AddSkill onSkillAdded={handleSkillAdded} />
        )}
      </section>

      <section className="projects-section card">
        {auth.loggedIn && auth.isAdmin && (
          <div className="manage-link">
            <Link to="/admin/projects">Manage Projects</Link>
          </div>
        )}
        <h2>Projects</h2>
        <Projects key={projectRefreshKey} />
        {auth.loggedIn && auth.isAdmin && (
          <AddProject onProjectAdded={handleProjectAdded} />
        )}
      </section>
    </main>
  );
}

export default Home;
