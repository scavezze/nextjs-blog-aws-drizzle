CREATE TABLE IF NOT EXISTS "post" (
	"id" serial NOT NULL,
	"title" text,
	"slug" text,
	"content" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "post_slug_unique" UNIQUE("slug")
);
