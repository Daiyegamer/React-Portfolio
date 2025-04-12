import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API = import.meta.env.VITE_API_BASE;

function Login() {
    const [username, setUsername] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
      
        const formData = new URLSearchParams();
        formData.append("u", username);
        formData.append("pw", pw);
      
        try {
          const res = await fetch(`${API}/user/login`, {
            method: "POST",
            body: formData,
            credentials: "include",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", 
              "Accept": "application/json", 
            },
          });
      
          const data = await res.json(); 
      
          if (res.ok && data.success) {
            setAuth({
              loggedIn: true,
              isAdmin: data.isAdmin ?? false,
              loading: false,
            });
      
            navigate("/");
          } else {
            setError("Invalid username or password");
          }
        } catch (err) {
          console.error(err);
          setError("Server error");
        }
      };
      
      

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
