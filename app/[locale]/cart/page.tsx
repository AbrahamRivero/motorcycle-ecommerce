"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>
      {items.length === 0 ? (
        <p>
          Tu carrito está vacío.{" "}
          <Link href="/products" className="text-blue-600 hover:underline">
            Continuar comprando
          </Link>
        </p>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                Subtotal: ${subtotal.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Impuestos y envío calculados al finalizar la compra
              </p>
            </div>
            <Button asChild>
              <Link href="/checkout">Proceder al pago</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
