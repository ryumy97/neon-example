"use client";

import { createPost } from "@/data/neon";
import { useActionState } from "react";

const CreatePostForm = () => {
  const [state, formAction, isPending] = useActionState<
    {
      type: "none" | "error" | "success";
      message: string;
    },
    FormData
  >(
    async (prevState, formData: FormData) => {
      const title = formData.get("title")?.toString();
      const content = formData.get("content")?.toString();

      if (!title || !content)
        return {
          type: "error",
          message: "Please fill your fields",
        };

      await createPost({
        title,
        content,
      });

      return {
        type: "success",
        message: "Post created!",
      };
    },
    {
      type: "none",
      message: "",
    }
  );

  return (
    <form
      className={
        (isPending ? " pointer-events-none opacity-20" : "") +
        "transition-opacity grid gap-2"
      }
      action={formAction}
    >
      <h2>Create Post</h2>
      <input name="title" type="text" className="border"></input>
      <textarea name="content" id="" className="border"></textarea>
      {state.type === "error" && (
        <div className=" text-red-500">{state.message}</div>
      )}
      {state.type === "success" && (
        <div className=" text-emerald-700">{state.message}</div>
      )}
      <button className="bg-black text-white">Create</button>
    </form>
  );
};

export default CreatePostForm;
