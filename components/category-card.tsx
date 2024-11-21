import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
}

export function CategoryCard({ name, image, slug }: CategoryCardProps) {
  return (
    <Card className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <Link href={`/categories/${slug}`} className="relative block h-48">
        <div className="group relative block w-full h-full aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 group-hover:opacity-90" />
          <CardContent className="absolute bottom-0 left-0 right-0 p-2">
            <h3 className="text-lg font-semibold text-white text-center">
              {name}
            </h3>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
