import { SignedIn, SignedOut } from "@clerk/nextjs";
import UploadButton from "./_components/uploadButton";
import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
import { SimpleUploadButton } from "./_components/simple-upload-button";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4 p-6">
      {images.length == 0 ? (
        <div className="text-center text-xl font-semibold">No images yet</div>
      ) : (
        images.map((image) => (
          <div className="mb-8 flex h-48 w-48 flex-col" key={image.id}>
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
    <main className="mt-4">
      <SignedIn>
        <div className="flex w-full justify-center">
          <SimpleUploadButton />
        </div>
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
