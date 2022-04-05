import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "../../Redux/AuthRedux/actions";

const AccountCreation = () => {
  const dispatch = useDispatch();
  //   const userState = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <React.Fragment>
      <div>AccountCreation</div>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(createAccount({ name, email, password }));
        }}
      >
        {" "}
        Register{" "}
      </button>
    </React.Fragment>
  );
};

export default AccountCreation;
