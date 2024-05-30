import { SignedIn, SignedOut } from "@clerk/nextjs";
import UploadButton from "./_components/uploadButton";
import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {images.length == 0 ? (
        <div className="text-center text-xl font-semibold">No images yet</div>
      ) : (
        images.map((image) => (
          <div className="flex h-48 w-48 flex-col" key={image.id}>
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                width={480}
                height={480}
                style={{ objectFit: "contain" }}
              />
              <p className="text-sm">{image.name}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedIn>
        <UploadButton />
        <Images />
      </SignedIn>
      <SignedOut>
        <div className="text-center text-xl font-semibold">
          Please sign in to view images
        </div>
      </SignedOut>
    </main>
  );
}
