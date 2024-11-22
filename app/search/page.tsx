"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Moto Sport 1000",
    price: 9999.99,
    category: "Deportiva",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Cruiser Classic",
    price: 8999.99,
    category: "Cruiser",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Off-road Adventure",
    price: 7999.99,
    category: "Off-road",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "City Scooter",
    price: 3999.99,
    category: "Scooter",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Touring Comfort",
    price: 12999.99,
    category: "Touring",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Café Racer Retro",
    price: 10999.99,
    category: "Café Racer",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buscar productos</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <Input
            type="search"
            placeholder="Buscar por nombre o categoría"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Buscar</Button>
        </div>
      </form>
      {searchResults.length === 0 ? (
        <p>No se encontraron resultados para "{searchTerm}"</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg mb-4"
              />
              <h2 className="font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="font-semibold mb-4">${product.price.toFixed(2)}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/products/${product.id}`}>Ver detalles</Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
