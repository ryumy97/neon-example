import { getPostCount, getPosts } from "@/data/neon";
import CreatePostForm from "./form/create-post";
import PostCard from "./card/post-card";

export default async function Home() {
  const postcount = await getPostCount();
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-12 min-h-svh">
      <div className="col-span-full flex flex-col items-center justify-center gap-8">
        <div>
          <h1>Posts</h1>
          <div>Number of posts: {postcount}</div>
          <div className="space-y-8 min-w-2xl mt-6">
            {posts.map((item) => {
              return <PostCard key={item.id} {...item} />;
            })}
          </div>
        </div>
        <hr className="min-w-2xl" />
        <CreatePostForm />
      </div>
    </div>
  );
}
