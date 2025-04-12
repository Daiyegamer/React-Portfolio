import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API = import.meta.env.VITE_API_BASE;

function Skills({ onSkillDeleted }) {
  const [skills, setSkills] = useState([]);
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(null);
  const { auth } = useAuth();

  const fetchSkills = () => {
    fetch(`${API}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data));
  };

  useEffect(() => {
    fetchSkills();
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

    const res = await fetch(`${API}/admin/skills/delete/${name}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setMessage("✅ Skill deleted");
      fetchSkills();
      if (onSkillDeleted) onSkillDeleted();
    } else {
      setMessage("❌ Failed to delete skill");
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
        {skills.map((skill, idx) => (
          <li key={idx}>
            <strong>{skill.name}</strong> — {skill.level}
            {" "}
            {auth.loggedIn && auth.isAdmin && (
              <button className="delete-btn" onClick={() => confirmDelete(skill.name)}>Delete</button>

            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
