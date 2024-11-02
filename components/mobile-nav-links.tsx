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
          B<span className="text-accent">i</span>ke
        </span>
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-accent transition-colors",
          {
            "bg-primary/10 text-accent": pathname === "/dashboard",
          }
        )}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/dashboard/orders"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-accent transition-colors",
          {
            "bg-primary/10 text-accent": pathname === "/dashboard/orders",
          }
        )}
      >
        <ShoppingCart className="h-5 w-5" />
        Orders
      </Link>
      <Link
        href="/dashboard/products"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-accent transition-colors",
          {
            "bg-primary/10 text-accent": pathname === "/dashboard/products",
          }
        )}
      >
        <Package className="h-5 w-5" />
        Products
      </Link>
      <Link
        href="/dashboard/customers"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-accent transition-colors",
          {
            "bg-primary/10 text-accent": pathname === "/dashboard/customers",
          }
        )}
      >
        <Users className="h-5 w-5" />
        Customers
      </Link>
      <Link
        href="/dashboard/events"
        className={cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-accent transition-colors",
          {
            "bg-primary/10 text-accent": pathname === "/dashboard/events",
          }
        )}
      >
        <Tickets className="h-5 w-5" />
        Events
      </Link>
    </>
  );
};

export default MobileNavLinks;