import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
const SuccessComponents = () => {
  const navigate = useNavigate();
  const userDetails = (
    <div>
      <Button
        onClick={() => {
          navigate("/pagination");
        }}
      >
        Pagination
      </Button>
      <Button
        onClick={() => {
          navigate("/profile");
        }}
      >
        {" "}
        Profile Page
      </Button>
    </div>
  );

  return <>{userDetails}</>;
};

export default SuccessComponents;
