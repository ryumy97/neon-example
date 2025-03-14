import { getPostCount, getPosts } from "@/data/neon";
import CreatePostForm from "./form/create-post";

export default async function Home() {
  const postcount = await getPostCount();
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-12 min-h-svh">
      <div className="col-span-full flex flex-col items-center justify-center gap-8">
        <div>
          <h1>Posts</h1>
          <div>Number of posts: {postcount}</div>
          <div className="space-y-8 min-w-2xl">
            {posts.map((item) => {
              return (
                <div key={item.id}>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <CreatePostForm />
      </div>
    </div>
  );
}
