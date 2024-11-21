import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "./category-card";

const categories = [
  {
    name: "Motorcycles",
    slug: "motorcycles",
    imageSrc: "/268964158acf429229dc46f7c3980801.webp",
  },
  {
    name: "Riding Gear",
    slug: "riding-gear",
    imageSrc: "/dhehaivan-hEK_nqe760k-unsplash.jpg",
  },
  {
    name: "Parts and Accessories",
    slug: "parts-accessories",
    imageSrc: "/photo-1652191337993-e4bcdd3bbc08.avif",
  },
  {
    name: "Electronics and Gadgets",
    slug: "electronics-gadgets",
    imageSrc: "/81kvSfIg1DL._AC_SX679_.jpg",
  },
  {
    name: "Custom Parts",
    slug: "custom-parts",
    imageSrc: "/61IcMd4A+5L._AC_SY300_SX300_.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-24 bg-categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Shop by Category
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-medium text-primary hover:text-accent/80 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5">
          {categories.map(({ name, imageSrc, slug }) => (
            <CategoryCard key={name} name={name} slug={slug} image={imageSrc} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:text-accent/80"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
