"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [quantity, setQuantity] = useState(1);

  // En una aplicación real, obtendríamos los detalles del producto desde una API o base de datos
  const product = {
    id: params.id,
    name: "Moto Sport 1000",
    price: 9999.99,
    description:
      "Una motocicleta deportiva de alto rendimiento diseñada para la velocidad y la agilidad.",
    specs: {
      motor: "1000cc, 4 cilindros en línea",
      potencia: "180 HP",
      peso: "190 kg",
      velocidadMaxima: "299 km/h",
    },
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex mt-4 space-x-4">
          {product.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${product.name} - Vista ${index + 2}`}
              width={100}
              height={100}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-semibold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="mb-6">{product.description}</p>
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="outline"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="outline"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
          <Button>Agregar al carrito</Button>
        </div>
        <Tabs defaultValue="specs">
          <TabsList>
            <TabsTrigger value="specs">Especificaciones</TabsTrigger>
            <TabsTrigger value="shipping">Envío</TabsTrigger>
          </TabsList>
          <TabsContent value="specs">
            <ul className="list-disc pl-5">
              <li>Motor: {product.specs.motor}</li>
              <li>Potencia: {product.specs.potencia}</li>
              <li>Peso: {product.specs.peso}</li>
              <li>Velocidad máxima: {product.specs.velocidadMaxima}</li>
            </ul>
          </TabsContent>
          <TabsContent value="shipping">
            <p>
              Envío gratuito a todo el país. Tiempo estimado de entrega: 3-5
              días hábiles.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
