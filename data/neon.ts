"use server";

import { neon } from "@neondatabase/serverless";

export async function getData() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT version()`;

  return response[0].version;
}
