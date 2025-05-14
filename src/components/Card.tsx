import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProp {
  name: string;
  img: string | StaticImageData;
  link: string;
}

export const Card = ({ name, img, link }: CardProp) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-white rounded-xl shadow-md p-4 w-[300px] hover:scale-105 transition-transform"
    >
      <div className="w-full h-[300px] overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={name}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2 text-center">{name}</h2>
    </Link>
  );
};
