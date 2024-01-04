"use client";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  function signOutHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    signOut({ callbackUrl: "/" });
  }

  return (
    <Button color="inherit" onClick={signOutHandler}>
      Sign out
    </Button>
  );
}
