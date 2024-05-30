import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNumber = Number(photoId);
  if (isNaN(photoIdAsNumber)) throw new Error("Invalid photo id");
  const image = await getImage(photoIdAsNumber);

  return (
    <div>
      <Image src={image.url} alt={image.name} width={720} height={720} />
    </div>
  );
}
