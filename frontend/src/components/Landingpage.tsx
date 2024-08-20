import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Landingpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLogOut = async () => {
    await axios.get("/api/logout");
    navigate("/");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    (async () => {
      const resp = await axios.get("/api/isloggedin");
      console.log(resp.data);
      setIsLoggedIn(resp.data);
    })();
  });
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-zinc-900 h-screen text-white">
        {isLoggedIn ? (
          <div>
            <button
              className="bg-white text-black m-4 px-2 py-1 rounded-sm "
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => navigate("/loginpage")}
              className="bg-white text-black m-4 px-2 py-1 rounded-sm "
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signuppage")}
              className="bg-white text-black m-4 px-2 py-1 rounded-sm "
            >
              SignUp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
