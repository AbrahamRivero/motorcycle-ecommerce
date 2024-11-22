import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Moto Sport 1000",
    price: 9999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Cruiser Classic",
    price: 8999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Off-road Adventure",
    price: 7999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "City Scooter",
    price: 3999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Touring Comfort",
    price: 12999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Café Racer Retro",
    price: 10999.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nuestros productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/products/${product.id}`}>Ver detalles</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
