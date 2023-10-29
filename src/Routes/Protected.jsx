import { useContext, useEffect } from "react";
import { Context } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Protected({ children }) {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  if (!user) {
    useEffect(() => {
      navigate("/signin");
    }, []);
  } else {
    return children;
  }
}
