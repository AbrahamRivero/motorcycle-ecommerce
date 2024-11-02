import React from "react";

const ShopGearProducts = () => {
  return (
    <section
      aria-labelledby="shop-gear-accessories-heading"
      className="bg-background"
    >
      <div className="mx-auto container px-4 pt-0 pb-16 sm:px-6 sm:py-24 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between mb-2">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Shop Gear & Accessories
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-primary hover:text-primary/80 md:block"
          >
            Shop more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <p className="text-muted mb-8">
          Level up your style with our handpicked selection of trendy pieces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt={`product ${index}`}
                    src="https://placehold.co/600x400?text=No+Image"
                    className="aspect-h-3 aspect-w-4 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-200" />
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium">
                  <h3>
                    <a href="#" className="text-foreground hover:text-primary">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {`Product ${index}`}
                    </a>
                  </h3>
                  <p className="text-primary/70 font-semibold">{`$${750}`}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{`Category ${index}`}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGearProducts;
