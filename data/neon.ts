"use server";

import prisma from "./prisma";

export async function getPostCount() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  return prisma.post.count();
}

export async function getPosts() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  return prisma.post.findMany();
}

export async function createPost(data: { title: string; content: string }) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  return prisma.post.create({
    data,
  });
}

export async function likePost(id: number) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Environment variable not set!!!");
  }

  const post = await prisma.post.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  return prisma.post.update({
    data: {
      likes: (post.likes || 0) + 1,
    },
    where: {
      id: id,
    },
  });
}
