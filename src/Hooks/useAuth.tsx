import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };

  const handleLogout = () => {
    setIsAuth(!isAuth)
    navigate("/");
  }

  return {
    isAuth,
    setIsAuth,
    handleLogin,
    handleLogout
  };
};

