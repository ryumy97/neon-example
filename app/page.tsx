import { getPostCount } from "@/data/neon";

export default async function Home() {
  const postcount = await getPostCount();

  return (
    <div className="grid grid-cols-12 min-h-svh">
      <div className="col-span-full flex flex-col items-center justify-center">
        <div>{postcount}</div>
        <div></div>
      </div>
    </div>
  );
}
