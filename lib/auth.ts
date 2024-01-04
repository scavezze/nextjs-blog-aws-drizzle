"use server";
import { getServerSession } from "next-auth/next";
import { config } from "./authConfig";

export async function auth() {
  const session = await getServerSession(config);
  return session;
}
