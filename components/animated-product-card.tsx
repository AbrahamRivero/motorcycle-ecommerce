"use client";

import { Badge } from "./ui/badge";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  category: string;
  name: string;
  description: string;
  rating: number;
  votes: number;
  image: string;
  price: number;
}

export default function AnimatedProductCard({
  id,
  category,
  name,
  description,
  rating,
  votes,
  image,
  price,
}: ProductCardProps) {
  //TODO:Crear el link a la página detallada del producto, añadir una breve descripción a la card
  return (
    <div className="group relative">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium">
        <h3>
          <a href="#" className="text-foreground hover:text-primary">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="text-primary/70 font-semibold">${price}</p>
      </div>
      <p className="mt-1 text-sm text-muted">{category}</p>
      <div className="mt-2">
        <Badge variant="secondary" className="bg-secondary/10 text-secondary">
          ★ {rating} ({votes} reviews)
        </Badge>
      </div>
    </div>
  );
}
