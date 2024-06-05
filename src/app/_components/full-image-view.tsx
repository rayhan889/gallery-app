import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full max-w-full flex-col overflow-y-scroll">
      <img
        src={image.url}
        alt={image.name}
        className="h-full w-full object-cover"
      />
      <div className="flex flex-shrink-0 flex-col">
        <h1 className="text-2xl font-bold">{image.name}</h1>
        <p className="text-sm text-gray-400">Image description</p>
      </div>
    </div>
  );
}
