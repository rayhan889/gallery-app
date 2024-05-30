import { Modal } from "./modal";
import FullImageView from "~/app/_components/full-image-view";

export default async function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const imageIdAsNumber = Number(imageId);
  if (isNaN(imageIdAsNumber)) throw new Error("Invalid image ID");

  return (
    <Modal>
      <FullImageView id={imageIdAsNumber} />
    </Modal>
  );
}
