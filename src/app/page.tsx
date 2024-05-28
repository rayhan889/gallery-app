import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mokcUrls = [
  "https://utfs.io/f/f1abb778-a640-4679-84a1-dcc191deb198-6e676j.png",
  "https://utfs.io/f/50a3f2f7-aa80-4998-ab71-a6716b1d79d5-23tg.jpg",
];

const mockImages = mokcUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <p key={post.id}>{post.name}</p>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
