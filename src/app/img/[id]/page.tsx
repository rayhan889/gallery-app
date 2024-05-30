import FullImageView from "~/app/_components/full-image-view";

export default async function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const imageIdAsNumber = Number(imageId);
  if (isNaN(imageIdAsNumber)) throw new Error("Invalid image ID");

  return <FullImageView id={imageIdAsNumber} />;
}
