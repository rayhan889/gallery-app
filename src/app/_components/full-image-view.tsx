import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full gap-x-4 bg-red-200">
      <img
        src={image.url}
        alt={image.name}
        className="h-full w-96 object-cover"
      />

      <div className="flex h-full w-full flex-col gap-y-3 bg-green-200 p-4">
        <h2 className="text-xl">Image Details : </h2>
        <h4 className="text-base font-bold">Name : {image.name}</h4>
        <h4 className="text-base font-bold">Name : {image.name}</h4>
        <h4 className="text-base font-bold">Name : {image.name}</h4>
      </div>
    </div>
  );
}
