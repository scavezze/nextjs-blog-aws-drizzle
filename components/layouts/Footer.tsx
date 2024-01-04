"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Box alignItems="center" justifyContent="center" display="flex">
            <Typography variant="body1">
              Tech Blog - It&apos;s all about techy things and such
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
