import React from "react";
import { useNavigate } from "react-router-dom";
const SuccessComponents = () => {
  const navigate = useNavigate();
  const userDetails = (
    <div>
      <button
        onClick={() => {
          navigate("/pagination");
        }}
      >
        Pagination
      </button>
      <button> All Authors</button>
    </div>
  );

  return (
    <ul>
      <li>{userDetails}</li>
      <li>Get</li>
    </ul>
  );
};

export default SuccessComponents;
