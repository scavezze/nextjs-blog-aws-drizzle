CREATE TABLE IF NOT EXISTS "comment" (
	"id" serial NOT NULL,
	"name" text,
	"content" text,
	"post_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comment" ADD CONSTRAINT "comment_post_id_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
