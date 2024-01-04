import { db } from "@/database";
import { sessions } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const { sessionToken } = await request.json();
  const session = await db
    .select()
    .from(sessions)
    .where(eq(sessions.sessionToken, sessionToken));

  return Response.json({ session: session });
}
