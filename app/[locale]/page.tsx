import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Features from "@/components/features";
import TrendingProducts from "@/components/trending-products";
import Categories from "@/components/categories";
import ShopGearProducts from "@/components/other-products";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black/90 text-white">
      {/* Hero Section */}
      <Banner />
      {/* <CarouselBanner /> */}

      {/* Categories */}
      <Categories />

      {/* Best Sellers */}
      <TrendingProducts />

      {/* Shop Gear & Accessories */}
      <ShopGearProducts />

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
}
