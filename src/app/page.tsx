import Link from "next/link";

const mokcUrls = [
  "https://utfs.io/f/f1abb778-a640-4679-84a1-dcc191deb198-6e676j.png",
  "https://utfs.io/f/50a3f2f7-aa80-4998-ab71-a6716b1d79d5-23tg.jpg",
];

const mockImages = mokcUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
