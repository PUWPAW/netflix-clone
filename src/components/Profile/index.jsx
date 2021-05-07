import React from "react";
import { useHistory } from "react-router";
import { auth } from "../../lib/firebase";

const Profile = () => {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}>
        logout
      </button>
    </div>
  );
};

export default Profile;
