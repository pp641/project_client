import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logoutfunction = () => {
  const navigate = useNavigate();
  const perform = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("payload");
    navigate("/");
  };

  useEffect(() => {
    perform();
  }, []);

  return <></>;
};

export default Logoutfunction;
