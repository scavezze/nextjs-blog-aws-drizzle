import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import { db } from "@/database";

export const config = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
