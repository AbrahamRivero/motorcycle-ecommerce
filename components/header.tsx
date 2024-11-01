import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  Home,
  ShoppingCart,
  Info,
  Phone,
  BookOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/shop", label: "Shop", icon: ShoppingBag },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/blog", label: "Blog", icon: BookOpen },
  ];

  return (
    <header className="w-full bg-[#111212]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo (hidden on mobile) */}
          <Link href="/" className="flex-shrink-0 hidden lg:block">
            <span className="text-2xl font-bold text-white">
              B<span className="text-[#C2290A]">i</span>ke
            </span>
          </Link>

          {/* Mobile Sidebar Trigger (replaces logo on mobile) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="lg:hidden text-white hover:bg-transparent focus:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-[#111212] border-none"
            >
              <SheetTitle>
                {/* Logo in sidebar */}
                <div className="mb-8 mt-4">
                  <span className="text-2xl font-bold text-white">
                    B<span className="text-[#C2290A]">i</span>ke
                  </span>
                </div>
              </SheetTitle>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-white hover:text-gray-300 transition-colors text-lg"
                  >
                    <link.icon className="h-5 w-5 mr-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
              <Separator className="my-6" />
              <div className="flex flex-col gap-6">
                <button className="flex items-center text-white hover:text-gray-300 transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-4" />
                  <span>Shopping Cart</span>
                </button>
                <button className="flex items-center text-white hover:text-gray-300 transition-colors">
                  <Heart className="h-5 w-5 mr-4" />
                  <span>Favorites</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Search Bar */}
          <div className="flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                className="w-full bg-[#2A2A2A] border-0 pl-10 pr-4 py-2 text-white placeholder:text-gray-400 focus-visible:ring-0"
                placeholder="Search"
                type="search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-white hover:text-gray-300 transition-colors">
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Shopping Cart</span>
              </button>
              <button className="text-white hover:text-gray-300 transition-colors">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Favorites</span>
              </button>
            </div>

            {/* User Button (visible on all screens) */}
            <button className="text-white hover:text-gray-300 transition-colors">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
