import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserDetails } from "../../Redux/AuthRedux/actions";
import MapCurrentArray from "../Pagination/mapCurrentArray";

const HasDoneArray = (props) => {
  const currentEmail = props.email;
  const records = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserDetails(currentEmail));
  }, []);

  return (
    <MapCurrentArray record={records.AuthReducers.currentUser[0]?.hasDone} />
  );
};

export default HasDoneArray;
