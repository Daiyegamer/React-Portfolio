import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API = import.meta.env.VITE_API_BASE;

function Projects({ onProjectDeleted }) {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(null);
  const { auth } = useAuth();

  const fetchProjects = () => {
    fetch(`${API}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const confirmDelete = (name) => {
    setPendingDelete(name);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    const name = pendingDelete;
    setShowConfirm(false);
    setPendingDelete(null);

    const res = await fetch(`${API}/admin/projects/delete/${name}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setMessage("✅ Project deleted");
      fetchProjects();
      if (onProjectDeleted) onProjectDeleted();
    } else {
      setMessage("❌ Failed to delete project");
    }
  };

  return (
    <>
      {message && (
        <p className={message.includes("✅") ? "success-message" : "error-message"}>
          {message}
        </p>
      )}


      {showConfirm && (
        <div className="confirm-box">
          <p>Are you sure you want to delete "{pendingDelete}"?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
      )}

      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <strong>{project.name}</strong> — {project.description}
            {project.url && (
              <>
                {" "}—{" "}
                <a href={project.url} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </>
            )}
            {" "}
            {auth.loggedIn && auth.isAdmin && (
              <button className="delete-btn" onClick={() => confirmDelete(project.name)}>Delete</button>

            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;
