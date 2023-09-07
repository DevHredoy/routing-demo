import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Details about the {userId} number user</div>;
};

export default UserDetails;
// use param is the number argument which can be passed
//in the url and that argument can be retained and accessed  and modified.
