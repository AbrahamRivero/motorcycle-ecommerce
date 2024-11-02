import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const trendingProducts = [
  {
    id: 1,
    category: "American",
    name: "HARLEY DAVIDSON",
    description:
      "Experience the legendary power and style of American engineering.",
    rating: 4.6,
    votes: 19,
    href: "#",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=2940",
    price: 500,
  },
  {
    id: 2,
    category: "Classic",
    name: "INDIAN SCOUT",
    description: "Timeless design meets modern performance.",
    rating: 4.8,
    votes: 24,
    href: "#",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2940",
    price: 650,
  },
  {
    id: 3,
    category: "Sport",
    name: "Jin",
    description: "Pure adrenaline, unmatched performance.",
    rating: 4.9,
    votes: 31,
    href: "#",
    image: "/jin.webp",
    price: 380,
  },
  {
    id: 4,
    category: "Sport",
    name: "HARLEY DAVIDSON",
    description: "Pure adrenaline, unmatched performance.",
    rating: 4.9,
    votes: 31,
    href: "#",
    image: "/harley-davidson-YsMg1pJqqKk-unsplash.jpg",
    price: 880,
  },
  {
    id: 5,
    category: "Touring",
    name: "BMW R 1250 GS",
    description: "Ultimate touring machine for long distances.",
    rating: 4.7,
    votes: 20,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 1200,
  },
  {
    id: 6,
    category: "Adventure",
    name: "Honda Africa Twin",
    description: "For those who seek adventure on any terrain.",
    rating: 4.8,
    votes: 29,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 750,
  },
  {
    id: 7,
    category: "Electric",
    name: "Zero SR/F",
    description: "Revolutionary electric performance.",
    rating: 4.5,
    votes: 17,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 1400,
  },
  {
    id: 8,
    category: "Cruiser",
    name: "Ducati Diavel",
    description: "Combining power with style.",
    rating: 4.9,
    votes: 34,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 1100,
  },
  {
    id: 9,
    category: "Sport",
    name: "Kawasaki Ninja H2",
    description: "The fastest production motorcycle.",
    rating: 4.9,
    votes: 33,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 1500,
  },
  {
    id: 10,
    category: "Classic",
    name: "Triumph Bonneville",
    description: "An icon of British motorcycling.",
    rating: 4.7,
    votes: 22,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 900,
  },
  {
    id: 11,
    category: "Cruiser",
    name: "Yamaha VMAX",
    description: "A beast of a cruiser with muscle.",
    rating: 4.6,
    votes: 27,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 1250,
  },
  {
    id: 12,
    category: "Retro",
    name: "Royal Enfield Continental GT",
    description: "Retro styling with modern reliability.",
    rating: 4.5,
    votes: 18,
    href: "#",
    image: "https://placehold.co/600x400?text=No+Image",
    price: 600,
  },
];

const TrendingProducts = () => {
  return (
    <section aria-labelledby="trending-heading" className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2
            id="trending-heading"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Trending Products
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-medium text-accent hover:text-accent/80 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-h-3 aspect-w-4 object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium">
                <h3>
                  <a href="#" className="text-slate-100">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-slate-300">{`$${product.price}`}</p>
              </div>
              <p className="mt-1 text-sm text-slate-200">{product.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="#"
            className="font-medium text-accent hover:text-accent/80"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
