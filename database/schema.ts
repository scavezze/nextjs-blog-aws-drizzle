import { integer, pgTable, primaryKey, serial, text, timestamp } from "drizzle-orm/pg-core";
import { AdapterAccount } from "next-auth/adapters";

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: text("title"),
  slug: text("slug").unique(),
  content: text("content"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const comment = pgTable("comment", {
  id: serial("id").primaryKey(),
  name: text("name"),
  content: text("content"),
  postId: integer("post_id").references(() => post.id),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

//NextAuth

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
 })
 
 export const accounts = pgTable(
 "account",
 {
   userId: text("userId")
     .notNull()
     .references(() => users.id, { onDelete: "cascade" }),
   type: text("type").$type<AdapterAccount["type"]>().notNull(),
   provider: text("provider").notNull(),
   providerAccountId: text("providerAccountId").notNull(),
   refresh_token: text("refresh_token"),
   access_token: text("access_token"),
   expires_at: integer("expires_at"),
   token_type: text("token_type"),
   scope: text("scope"),
    id_token: text("id_token"),
   session_state: text("session_state"),
 },
 (account) => ({
   compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
 })
 )
 
 export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
 })
 
 export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
 )