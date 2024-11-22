"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Finalizar compra</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Información de envío</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" placeholder="Juan" />
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" placeholder="Pérez" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Dirección</Label>
              <Input id="address" placeholder="Calle Principal 123" />
            </div>
            <div>
              <Label htmlFor="city">Ciudad</Label>
              <Input id="city" placeholder="Ciudad de México" />
            </div>
            <div>
              <Label htmlFor="postalCode">Código Postal</Label>
              <Input id="postalCode" placeholder="12345" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Método de pago</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Tarjeta de crédito</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
          {paymentMethod === "credit-card" && (
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Número de tarjeta</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expirationDate">Fecha de expiración</Label>
                  <Input id="expirationDate" placeholder="MM/AA" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$9,999.99</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>$9,999.99</span>
            </div>
          </div>
        </div>
        <Button className="w-full">Realizar pedido</Button>
      </form>
    </div>
  );
}
