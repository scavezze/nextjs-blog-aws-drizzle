"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
import { ReactNode, forwardRef } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
