import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    //console.log(req);
  },
  {
    callbacks: {
      authorized: async ({ req }) => {
        const sessionToken = req.cookies.get("next-auth.session-token")?.value;

        if (sessionToken) {
          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/get-session`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ sessionToken: sessionToken }),
            }
          );

          const session = await response.json();

          if (session) {
            return true;
          }
        }
        return false;
      },
    },
  }
);

export const config = { matcher: ["/admin/(.*)"] };
