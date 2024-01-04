"use client";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  function signInHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    signIn("github");
  }

  return (
    <Button color="inherit" onClick={signInHandler}>
      Sign In
    </Button>
  );
}
