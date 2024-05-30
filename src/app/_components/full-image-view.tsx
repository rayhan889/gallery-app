import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return <Image src={image.url} alt={image.name} width={480} height={480} />;
}
