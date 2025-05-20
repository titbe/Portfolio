import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProp {
  name: string;
  img: string | StaticImageData;
  link: string;
  techStack: string[];
}

export const Card = ({ name, img, link, techStack }: CardProp) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-white rounded-xl shadow-md p-4 w-full hover:scale-105 transition-transform"
    >
      <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={name}
          width={300}
          height={200}
          className="object-contain w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-bold mt-2">{name}</h2>
      <ul className="mt-2 list-disc list-inside italic text-gray-700">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </Link>
  );
};
