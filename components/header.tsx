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
    <header className="w-full bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo (hidden on mobile) */}
          <Link href="/" className="flex-shrink-0 hidden lg:block">
            <span className="text-2xl font-bold text-primary-foreground">
              B<span className="text-accent">i</span>ke
            </span>
          </Link>

          {/* Mobile Sidebar Trigger (replaces logo on mobile) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="lg:hidden text-primary-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-primary border-none"
            >
              <SheetHeader>
                <SheetTitle className="text-primary-foreground">
                  <span className="text-2xl font-bold">
                    B<span className="text-accent">i</span>ke
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-primary-foreground hover:text-accent transition-colors text-lg"
                  >
                    <link.icon className="h-5 w-5 mr-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
              <Separator className="my-6 bg-primary-foreground/20" />
              <div className="flex flex-col gap-6">
                <button className="flex items-center text-primary-foreground hover:text-accent transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-4" />
                  <span>Shopping Cart</span>
                </button>
                <button className="flex items-center text-primary-foreground hover:text-accent transition-colors">
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
                className="w-full bg-primary-foreground/10 border-primary-foreground/20 pl-10 pr-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Search"
                type="search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/50" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Favorites</span>
              </Button>
            </div>

            {/* User Button (visible on all screens) */}
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}