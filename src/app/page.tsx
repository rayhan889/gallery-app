import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn } from "@clerk/nextjs";
import UploadButton from "./_components/uploadButton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        <SignedIn>
          <UploadButton />
        </SignedIn>
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
