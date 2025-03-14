"use server";

import prisma from "./prisma";

export async function getPostCount() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  return prisma.post.count();
}
