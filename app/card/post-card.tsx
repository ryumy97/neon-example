"use client";

import { likePost } from "@/data/neon";
import { useTransition } from "react";

type Props = {
  id: number;
  title: string;
  content?: string | null;
  likes?: number | null;
};

const PostCard: React.FC<Props> = (props) => {
  const { id, title, content, likes } = props;

  const [isPending, startTransition] = useTransition();

  return (
    <div key={id} className="space-y-2">
      <h3 className="text-2xl">{title}</h3>
      <p>{content}</p>
      <button
        className={
          "bg-black text-white px-2 cursor-pointer transition-opacity" +
          (isPending
            ? " pointer-events-none opacity-24 cursor-not-allowed"
            : "")
        }
        onClick={() => {
          startTransition(async () => {
            await likePost(id);
          });
        }}
      >
        {likes || 0} Likes!
      </button>
    </div>
  );
};

export default PostCard;
