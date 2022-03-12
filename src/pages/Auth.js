import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (isLoggedIn) {
        navigate("/");
        return;
      }

      const { search } = location;
      const query = search.slice(1).split("=");

      if (query[0] === "login") {
        if (query[1] === "true") setIsLogin(true);
        else if (query[1] === "false") setIsLogin(false);
      }
    } catch (e) {
      console.log("Auth.js Page\n", e);
    }
  }, [location]);

  return (
    <>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Auth;
