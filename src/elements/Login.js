import { Button } from "@material-ui/core";
import React from "react";
function Login() {
  const signIn = () => {
    // sign ...
  };
  return (
    <Button type="submit" onClick={signIn}>
      Sign In{" "}
    </Button>
  );
}

export default Login;
