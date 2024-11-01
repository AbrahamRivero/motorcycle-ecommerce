"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Package, Users, Tickets } from "lucide-react";
import Link from "next/link";

const MobileNavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link href="/" className="flex-shrink-0">
        <span className="text-2xl font-bold text-white">
          B<span className="text-[#C2290A]">i</span>ke
        </span>
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          {
            "bg-muted text-foreground": pathname === "/dashboard",
          }
        )}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/dashboard/orders"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          {
            "bg-muted text-foreground": pathname === "/dashboard/orders",
          }
        )}
      >
        <ShoppingCart className="h-5 w-5" />
        Pedidos
      </Link>
      <Link
        href="/dashboard/products"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          {
            "bg-muted text-foreground": pathname === "/dashboard/products",
          }
        )}
      >
        <Package className="h-5 w-5" />
        Productos
      </Link>
      <Link
        href="/dashboard/customers"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          {
            "bg-muted text-foreground": pathname === "/dashboard/customers",
          }
        )}
      >
        <Users className="h-5 w-5" />
        Clientes
      </Link>
      <Link
        href="/dashboard/events"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          {
            "bg-muted text-foreground": pathname === "/dashboard/events",
          }
        )}
      >
        <Tickets className="h-5 w-5" />
        Eventos
      </Link>
    </>
  );
};

export default MobileNavLinks;
