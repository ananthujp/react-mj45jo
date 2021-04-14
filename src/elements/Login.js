import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    // sign ...
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => alert(error.message));
  };
  return (
    <Button type="submit" onClick={signIn}>
      Sign In{" "}
    </Button>
  );
}

export default Login;
