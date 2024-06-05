import { clerkClient } from "@clerk/nextjs/server";
import FullImageView from "~/app/_components/full-image-view";
import { getImage } from "~/server/queries";

export default async function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const imageIdAsNumber = Number(imageId);
  if (isNaN(imageIdAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(imageIdAsNumber);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 gap-x-2">
      <div className="flex flex-shrink items-start justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col gap-y-4 px-3">
        <h3 className="text-2xl font-bold">{image.name}</h3>

        <hr className="border border-white" />

        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <span className="text-zinc-300">Upload by : </span>
            <span className="font-semibold text-white">
              {uploaderInfo.username}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-zinc-300">Uploaded On : </span>
            <span className="font-semibold text-white">
              {image.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
