import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Contact from "./Contact";

function Header() {
  const { auth, setAuth } = useAuth();

  // ✅ Define the logout handler
  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE}/user/logout`, {
        method: "GET",
        credentials: "include",
      });

      setAuth({ loggedIn: false, isAdmin: false, loading: false });
      window.location.href = "/"; // Redirect back to home
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header>
      <h1>Adil's Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>


        

        {!auth.loading && (
          <>
            {!auth.loggedIn && <Link to="/login">Login</Link>}

            {auth.loggedIn && (
              <>
                <button
                  onClick={handleLogout}                  
                >
                  Logout
                </button>

              
              </>
            )}
          </>
        )}
      </nav>

      <Contact />
    </header>
  );
}

export default Header;
