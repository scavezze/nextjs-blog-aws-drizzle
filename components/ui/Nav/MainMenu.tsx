import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type MainMenuProps = {
  pages: {
    title: string;
    href: string;
    show: boolean;
  }[];
};

export default function MainMenu({ pages }: MainMenuProps) {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map(
          (page) =>
            page.show && (
              <Link
                key={page.title}
                href={page.href}
                passHref
                className="unstyledLink"
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            )
        )}
      </Box>
    </>
  );
}
