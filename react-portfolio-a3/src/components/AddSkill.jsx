import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_BASE;

function AddSkill({ onSkillAdded }) {

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/admin/skills/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      credentials: "include",
      body: JSON.stringify({ name, level }),
    });

    const data = await res.json();

    if (data.success) {
      setName("");
      setLevel(""); // ✅ correct name now
      setMessage("✅ Skill added!");
      if (onSkillAdded) onSkillAdded(); 
    } else {
      setMessage("❌ Failed to add skill");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Skill</h3>
      <input
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Level (e.g. Intermediate)"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        required
      />
      <button type="submit">Add Skill</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddSkill;
