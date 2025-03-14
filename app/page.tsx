import { getData } from "@/data/neon";

export default async function Home() {
  const version = await getData();

  return (
    <div className="grid grid-cols-12 min-h-svh">
      <div className="col-span-full flex items-center justify-center">
        {version}
      </div>
    </div>
  );
}
