import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MainMenu from "./MainMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import Link from "next/link";
import { auth } from "@/lib/auth";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";

export default async function Nav() {
  const session = await auth();
  type page = {
    title: string;
    href: string;
    show: boolean;
  };

  const blogName = "Tech Blog";
  const pages: page[] = [
    { title: "All Posts", href: "/posts", show: true },
    { title: "Admin", href: "/admin/posts", show: session !== null },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {blogName}
          </Typography>

          <ResponsiveMenu title={blogName} pages={pages} />
          <MainMenu pages={pages} />
          {!session && <SignInBtn />}
          {session && <SignOutBtn />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
