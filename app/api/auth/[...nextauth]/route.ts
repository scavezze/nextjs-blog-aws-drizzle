import { config } from "@/lib/authConfig";
import NextAuth from "next-auth";

const handler = NextAuth(config);

export { handler as GET, handler as POST };
