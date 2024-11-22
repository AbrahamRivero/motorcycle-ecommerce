import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, name: "Deportivas", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, name: "Cruiser", image: "/placeholder.svg?height=300&width=400" },
  { id: 3, name: "Off-road", image: "/placeholder.svg?height=300&width=400" },
  { id: 4, name: "Scooters", image: "/placeholder.svg?height=300&width=400" },
  { id: 5, name: "Touring", image: "/placeholder.svg?height=300&width=400" },
  { id: 6, name: "Café Racer", image: "/placeholder.svg?height=300&width=400" },
];

export default function CategoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Categorías de motocicletas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group"
          >
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-semibold">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
