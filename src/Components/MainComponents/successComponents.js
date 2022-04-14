import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
const SuccessComponents = () => {
  const navigate = useNavigate();
  const userDetails = (
    <div className="container">
      <div className="btn_box p-5 shadow-lg border">
        <div className="row">
          <div className="col-3"></div>
            <div className="col-3">
              <Button
              className="btn btn-primary"
              onClick={() => {
                navigate("/pagination");
              }}
              >
                Pagination
              </Button>
            </div>
            <div className="col-3">
              <Button
              onClick={() => {
                navigate("/profile");
              }}
              >
                
                Profile Page
              </Button>
            </div>
          <div className="col-3"></div>
        </div>
        
        
      </div>
      
    </div>
  );

  return <>{userDetails}</>;
};

export default SuccessComponents;
