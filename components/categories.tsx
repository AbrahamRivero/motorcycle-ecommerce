import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Motorcycles",
    href: "#",
    imageSrc: "/268964158acf429229dc46f7c3980801.webp",
  },
  {
    name: "Riding Gear",
    href: "#",
    imageSrc: "/dhehaivan-hEK_nqe760k-unsplash.jpg",
  },
  {
    name: "Parts and Accessories",
    href: "#",
    imageSrc: "/photo-1652191337993-e4bcdd3bbc08.avif",
  },
  {
    name: "Electronics and Gadgets",
    href: "#",
    imageSrc: "/81kvSfIg1DL._AC_SX679_.jpg",
  },
  {
    name: "Custom Parts",
    href: "#",
    imageSrc: "/61IcMd4A+5L._AC_SY300_SX300_.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground">
            Shop by Category
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-medium text-secondary hover:text-secondary/80 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5">
          {categories.map((category) => (
            <Card key={category.name} className="group overflow-hidden">
              <Link href={category.href} className="relative block h-48">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-2 text-center">
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    {category.name}
                  </h3>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="#"
            className="text-sm font-medium text-secondary hover:text-secondary/80"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
