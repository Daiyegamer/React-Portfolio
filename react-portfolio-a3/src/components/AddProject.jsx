import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_BASE;

function AddProject({ onProjectAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/admin/projects/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        description,
        url,
      }),
    });
   

    const data = await res.json();

    if (data.success) {
      setName("");
      setDescription("");
      setUrl("");
      setMessage("✅ Project added!");
      if (onProjectAdded) onProjectAdded();       
    } else {
      setMessage("❌ Failed to add project");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Project URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Project</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddProject;
